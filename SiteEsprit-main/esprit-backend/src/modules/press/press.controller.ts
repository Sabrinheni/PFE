import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Controller,
  UseInterceptors,
  Injectable,
  UploadedFiles
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

// Roles
import { Roles } from '../../shared/decorators/roles.decorator';
import { adminRoles, pressRoles } from '../../guards/roles.enum';

// HELPERS
import { validateImages, validateFiles } from '../../shared/filters.utils';
import { isFieldUnique } from '../../shared/isFieldUnique.utils';
import { findByField } from '../../shared/findByField.utils';
import { uploadFile } from '../../shared/file-upload.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';

// ENTITY RELATED
import { CreatePressDto, UpdatePressDto } from './dto';
import { PressEntity } from './entities/press.entity';
import { UserService } from '../users/user.service';
import { PressService } from './press.service';

@ApiBearerAuth()
@ApiTags('press')
@Controller()
@Injectable()
export class PressController {
  constructor(
    @InjectRepository(PressEntity)
    private readonly pressRepository: Repository<PressEntity>,
    private readonly pressService: PressService,
    private readonly userService: UserService
  ) {}

  @Get('press/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('Press')) params): Promise<PressEntity> {
    // throws error 404 if not found
    const press = await findByField(this.pressRepository, { _id: params.id }, true);
    return this.userService.populateUsers(press);
  }

  @Get('presses')
  async findAll(): Promise<PressEntity[]> {
    const presses = await this.pressService.findAll();
    return this.userService.populateUsers(presses);
  }

  @Get('presses/archived')
  @Roles(adminRoles.admin, pressRoles.handleArchivedPress)
  async findArchived(): Promise<PressEntity[]> {
    const presses = await this.pressService.findAll({ status: false });
    return this.userService.populateUsers(presses);
  }

  @Put('press/:id')
  @ApiBody({ type: [UpdatePressDto] })
  @Roles(adminRoles.admin, pressRoles.updatePress)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'file', maxCount: 1 }
    ])
  )
  async update(
    @Param(new ValidateObjectIdPipe('Press')) params,
    @Body() pressData: UpdatePressDto,
    @UploadedFiles() files
  ) {
    // Check if entity exists  throws exception if not exists!
    const toUpdate = await findByField(this.pressRepository, { _id: params.id }, true);

    // Check if entity's title is unique throws exception if not !
    await isFieldUnique(this.pressRepository, { title: pressData.title }, params.id);

    const image = [];
    const file = [];
    if (files.image) {
      image.push(files.image[0]);
    }
    if (files.file) {
      file.push(files.file[0]);
    }
    if (file.length > 0) {
      validateFiles(file);
    }
    if (image.length > 0) {
      validateImages(image);
    }
    if (image.length > 0) {
      pressData.image = await uploadFile(image[0]);
    }
    if (file.length > 0) {
      pressData.file = await uploadFile(file[0]);
    }
    const press = await this.pressService.update(toUpdate, pressData);
    return this.userService.populateUsers(press);
  }

  @Put('press/archive/:id')
  async archive(@Param(new ValidateObjectIdPipe('Press')) params) {
    // throws error 404 if not found
    const press = await this.pressService.archive(new ObjectID(params.id));
    return this.userService.populateUsers(press);
  }

  @Put('press/unarchive/:id')
  async unarchive(@Param(new ValidateObjectIdPipe('Press')) params) {
    // throws error 404 if not found
    const press = await this.pressService.unarchive(new ObjectID(params.id));
    return this.userService.populateUsers(press);
  }

  @Post('press')
  @Roles(adminRoles.admin, pressRoles.createPress)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'file', maxCount: 1 }
    ])
  )
  @ApiBody({ type: [CreatePressDto] })
  async create(@Body() pressData: CreatePressDto, @UploadedFiles() files) {
    // Check if entity's title is unique throws exception if not !
    await isFieldUnique(this.pressRepository, { title: pressData.title });

    const image = [];
    const file = [];
    if (files.image) {
      image.push(files.image[0]);
    }
    if (files.file) {
      file.push(files.file[0]);
    }
    if (file.length > 0) {
      validateFiles(file);
    }
    if (image.length > 0) {
      validateImages(image);
    }
    if (image.length > 0) {
      pressData.image = await uploadFile(image[0]);
    }
    if (file.length > 0) {
      pressData.file = await uploadFile(file[0]);
    }

    return await this.pressService.create(pressData);
  }

  @Delete('press/:id')
  @Roles(adminRoles.admin, pressRoles.deletePress)
  async delete(@Param(new ValidateObjectIdPipe('Press')) params) {
    // throws error 404 if not found
    return await this.pressService.delete(new ObjectID(params.id));
  }
}
