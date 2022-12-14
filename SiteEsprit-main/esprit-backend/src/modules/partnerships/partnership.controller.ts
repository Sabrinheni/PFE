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
import { adminRoles, partnershipRoles } from '../../guards/roles.enum';
import { Roles } from '../../shared/decorators';

// HELPERS
import { isFieldUnique } from '../../shared/isFieldUnique.utils';
import { findByField } from '../../shared/findByField.utils';
import { validateImages } from '../../shared/filters.utils';
import { uploadFile } from '../../shared/file-upload.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';

// ENTITY RELATED
import { CreatePartnershipDto, UpdatePartnershipDto } from './dto';
import { PartnershipEntity } from './entities/partnership.entity';
import { PartnershipService } from './partnership.service';
import { UserService } from '../users/user.service';

@ApiBearerAuth()
@ApiTags('partnership')
@Controller()
@Injectable()
export class PartnershipController {
  constructor(
    @InjectRepository(PartnershipEntity)
    private readonly partnershipRepository: Repository<PartnershipEntity>,
    private readonly partnershipService: PartnershipService,
    private readonly userService: UserService
  ) {}

  @Get('partnership/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('Partnership')) params): Promise<PartnershipEntity> {
    const partnership = await findByField(this.partnershipRepository, { _id: params.id }, true);
    return await this.userService.populateUsers(partnership);
  }

  @Get('partnerships')
  async findAll(): Promise<PartnershipEntity[]> {
    const partnerships = await this.partnershipService.findAll();
    return this.userService.populateUsers(partnerships);
  }

  @Get('partnershipsHome')
  async findAllHomePage(): Promise<PartnershipEntity[]> {
    const partnerships = await this.partnershipService.findAll();
    let currentIndex = partnerships.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = partnerships[currentIndex];
      partnerships[currentIndex] = partnerships[randomIndex];
      partnerships[randomIndex] = temporaryValue;
    }
    return partnerships.slice(0, 50);
  }

  @Put('partnership/:id')
  @ApiBody({ type: [UpdatePartnershipDto] })
  @Roles(adminRoles.admin, partnershipRoles.updatePartnership)
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param(new ValidateObjectIdPipe('Partnership')) params,
    @Body() partnershipData: UpdatePartnershipDto,
    @UploadedFile() image
  ) {
    const toUpdate = await findByField(this.partnershipRepository, { _id: params.id }, true);
    await isFieldUnique(this.partnershipRepository, { title: partnershipData.title }, params.id);
    if (image) {
      validateImages(image);
      partnershipData.image = await uploadFile(image);
    }
    const partnership = await this.partnershipService.update(toUpdate, partnershipData);
    return await this.userService.populateUsers(partnership);
  }

  @Post('partnership')
  @Roles(adminRoles.admin, partnershipRoles.createPartnership)
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({ type: [CreatePartnershipDto] })
  async create(@Body() partnershipData: CreatePartnershipDto, @UploadedFile() image) {
    await isFieldUnique(this.partnershipRepository, { title: partnershipData.title });
    if (image) {
      validateImages(image);
      partnershipData.image = await uploadFile(image);
    }
    return await this.partnershipService.create(partnershipData);
  }

  @Delete('partnership/:id')
  @Roles(adminRoles.admin, partnershipRoles.deletePartnership)
  async delete(@Param(new ValidateObjectIdPipe('Partnership')) params) {
    return await this.partnershipService.delete(new ObjectID(params.id));
  }
}
