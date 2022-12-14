import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Controller,
  Injectable,
  UseInterceptors,
  UploadedFiles
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

// Roles
import { adminRoles, unitRoles } from '../../guards/roles.enum';
import { Roles } from '../../shared/decorators';

// HELPERS
import { isFieldUnique } from '../../shared/isFieldUnique.utils';
import { findByField } from '../../shared/findByField.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';

// ENTITY RELATED
import { CreateUnitDto, UpdateUnitDto } from './dto';
import { UnitEntity } from './entities/unit.entity';
import { UserService } from '../users/user.service';
import { UnitService } from './unit.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { validateFiles, validateImages } from 'src/shared/filters.utils';
import { uploadFile } from 'src/shared/file-upload.utils';

@ApiBearerAuth()
@ApiTags('unit')
@Controller()
@Injectable()
export class UnitController {
  constructor(
    @InjectRepository(UnitEntity)
    private readonly unitRepository: Repository<UnitEntity>,
    private readonly unitService: UnitService,
    private readonly userService: UserService
  ) {}

  @Get('unit/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('Unit')) params): Promise<UnitEntity> {
    const unit = await findByField(this.unitRepository, { _id: params.id }, true);
    return await this.userService.populateUsers(unit);
  }

  @Get('units')
  async findAll(): Promise<UnitEntity[]> {
    const units = await this.unitService.findAll();
    return this.userService.populateUsers(units);
  }

  @Get('units/archived')
  @Roles(adminRoles.admin, unitRoles.handleArchivedUnit)
  async findArchived(): Promise<UnitEntity[]> {
    const units = this.unitService.findAll({ status: false });
    return await this.userService.populateUsers(units);
  }

  @Put('unit/:id')
  @ApiBody({ type: [UpdateUnitDto] })
  @Roles(adminRoles.admin, unitRoles.updateUnit)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'file', maxCount: 1 }
    ])
  )
  async update(
    @Param(new ValidateObjectIdPipe('Unit')) params,
    @Body() unitData: UpdateUnitDto,
    @UploadedFiles() files
  ) {
    // Check if entity exists  throws exception if not exists!
    const toUpdate = await findByField(this.unitRepository, { _id: params.id }, true);
    // Check if entity's title is unique throws exception if not !
    await isFieldUnique(this.unitRepository, { title: unitData.title }, params.id);

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
      unitData.image = await uploadFile(image[0]);
    }
    if (file.length > 0) {
      unitData.file = await uploadFile(file[0]);
    }
    if (!unitData.modules) {
      toUpdate.modules = [];
    }
    if (!unitData.videoUrl) {
      toUpdate.videoUrl = '';
    }
    const unit = await this.unitService.update(toUpdate, unitData);
    return await this.userService.populateUsers(unit);
  }

  @Post('unit')
  @Roles(adminRoles.admin, unitRoles.createUnit)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'file', maxCount: 1 }
    ])
  )
  @ApiBody({ type: [CreateUnitDto] })
  async create(@Body() unitData: CreateUnitDto, @UploadedFiles() files) {
    await isFieldUnique(this.unitRepository, { title: unitData.title });
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
      unitData.image = await uploadFile(image[0]);
    }
    if (file.length > 0) {
      unitData.file = await uploadFile(file[0]);
    }

    return await this.unitService.create(unitData);
  }

  @Put('unit/archive/:id')
  async archive(@Param(new ValidateObjectIdPipe('Unit')) params) {
    const unit = await this.unitService.archive(new ObjectID(params.id));
    return this.userService.populateUsers(unit);
  }

  @Put('unit/unarchive/:id')
  async unarchive(@Param(new ValidateObjectIdPipe('Unit')) params) {
    const unit = this.unitService.unarchive(new ObjectID(params.id));
    return this.userService.populateUsers(unit);
  }

  @Delete('unit/:id')
  @Roles(adminRoles.admin, unitRoles.deleteUnit)
  async delete(@Param(new ValidateObjectIdPipe('Unit')) params) {
    return await this.unitService.delete(new ObjectID(params.id));
  }
}
