import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Controller,
  UseInterceptors,
  UploadedFile,
  Injectable
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

// Roles
import { adminRoles, sliderRoles } from '../../guards/roles.enum';
import { Roles } from '../../shared/decorators';

// HELPERS
import { isFieldUnique } from '../../shared/isFieldUnique.utils';
import { findByField } from '../../shared/findByField.utils';
import { validateImages, imageRequired } from '../../shared/filters.utils';
import { uploadFile } from '../../shared/file-upload.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';

// ENTITY RELATED
import { CreateSliderDto, UpdateSliderDto } from './dto';
import { SliderEntity } from './entities/slider.entity';
import { UserService } from '../users/user.service';
import { SliderService } from './slider.service';
import { relatedEnum } from 'src/shared/enums/related.enum';

@ApiBearerAuth()
@ApiTags('slider')
@Controller()
@Injectable()
export class SliderController {
  constructor(
    @InjectRepository(SliderEntity)
    private readonly sliderRepository: Repository<SliderEntity>,
    private readonly sliderService: SliderService,
    private readonly userService: UserService
  ) {}

  @Get('slider/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('Slider')) params): Promise<SliderEntity> {
    const slider = await findByField(this.sliderRepository, { _id: params.id }, true);
    return this.userService.populateUsers(slider);
  }

  @Get('sliders/:related')
  async findAll(@Param('related') related): Promise<SliderEntity[]> {
    const sliders = await this.sliderService.findAll({ related: relatedEnum[related], status: true });
    return await this.userService.populateUsers(sliders);
  }

  @Get('sliders/:related/archived')
  @Roles(adminRoles.admin, sliderRoles.handleArchivedSlider)
  async findArchived(@Param('related') related): Promise<SliderEntity[]> {
    const sliders = this.sliderService.findAll({ related: relatedEnum[related], status: false });
    return await this.userService.populateUsers(sliders);
  }

  @Put('slider/:id')
  @ApiBody({ type: [UpdateSliderDto] })
  @Roles(adminRoles.admin, sliderRoles.updateSlider)
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param(new ValidateObjectIdPipe('Slider')) params,
    @Body() sliderData: UpdateSliderDto,
    @UploadedFile() image
  ) {
    // Check if entity exists  throws exception if not exists!
    const toUpdate = await findByField(this.sliderRepository, { _id: params.id }, true);
    // Check if entity's title is unique throws exception if not !
    await isFieldUnique(this.sliderRepository, { title: sliderData.title }, params.id);
    if (image) {
      validateImages(image);
      sliderData.image = await uploadFile(image);
    }
    const slider = await this.sliderService.update(toUpdate, sliderData);
    return this.userService.populateUsers(slider);
  }

  @Put('slider/archive/:id')
  async archive(@Param(new ValidateObjectIdPipe('Slider')) params) {
    const slider = await this.sliderService.archive(new ObjectID(params.id));
    return this.userService.populateUsers(slider);
  }

  @Put('slider/unarchive/:id')
  async unarchive(@Param(new ValidateObjectIdPipe('Slider')) params) {
    const slider = this.sliderService.unarchive(new ObjectID(params.id));
    return this.userService.populateUsers(slider);
  }

  @Post('slider')
  @Roles(adminRoles.admin, sliderRoles.createSlider)
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({ type: [CreateSliderDto] })
  async create(@Body() sliderData: CreateSliderDto, @UploadedFile() image) {
    await isFieldUnique(this.sliderRepository, { title: sliderData.title });
    if (image) {
      validateImages(image);
      sliderData.image = await uploadFile(image);
    } else {
      imageRequired();
    }
    return await this.sliderService.create(sliderData);
  }

  @Delete('slider/:id')
  @Roles(adminRoles.admin, sliderRoles.deleteSlider)
  async delete(@Param(new ValidateObjectIdPipe('Slider')) params) {
    return await this.sliderService.delete(new ObjectID(params.id));
  }
}
