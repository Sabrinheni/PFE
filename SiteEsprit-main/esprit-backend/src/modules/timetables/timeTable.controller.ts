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
import { adminRoles, timeTableRoles } from '../../guards/roles.enum';
import { Roles } from '../../shared/decorators';

// HELPERS
import { findByField } from '../../shared/findByField.utils';
import { validateFiles } from '../../shared/filters.utils';
import { uploadFile } from '../../shared/file-upload.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';

// ENTITY RELATED
import { CreateTimeTableDto, UpdateTimeTableDto } from './dto';
import { TimeTableEntity } from './entities/timeTable.entity';
import { TimeTableService } from './timeTable.service';
import { UserService } from '../users/user.service';

@ApiBearerAuth()
@ApiTags('timeTable')
@Controller()
@Injectable()
export class TimeTableController {
  constructor(
    @InjectRepository(TimeTableEntity)
    private readonly timeTableRepository: Repository<TimeTableEntity>,
    private readonly timeTableService: TimeTableService,
    private readonly userService: UserService
  ) {}

  @Get('timeTable/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('TimeTable')) params): Promise<TimeTableEntity> {
    const timeTable = await findByField(this.timeTableRepository, { _id: params.id }, true);
    return await this.userService.populateUsers(timeTable);
  }

  @Get('timeTables')
  async findAll(): Promise<TimeTableEntity[]> {
    const timeTables = await this.timeTableService.findAll();
    return this.userService.populateUsers(timeTables);
  }

  @Get('timeTables/archived')
  @Roles(adminRoles.admin, timeTableRoles.handleArchivedTimeTable)
  async findArchived(): Promise<TimeTableEntity[]> {
    const presses = await this.timeTableService.findAll({ status: false });
    return this.userService.populateUsers(presses);
  }

  @Put('timeTable/:id')
  @ApiBody({ type: [UpdateTimeTableDto] })
  @Roles(adminRoles.admin, timeTableRoles.updateTimeTable)
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param(new ValidateObjectIdPipe('TimeTable')) params,
    @Body() timeTableData: UpdateTimeTableDto,
    @UploadedFile() file
  ) {
    // Check if entity exists  throws exception if not exists!
    const toUpdate = await findByField(this.timeTableRepository, { _id: params.id }, true);
    if (file) {
      validateFiles(file);
      timeTableData.file = await uploadFile(file);
    }
    return await this.timeTableService.update(toUpdate, timeTableData);
  }

  @Post('timeTable')
  @Roles(adminRoles.admin, timeTableRoles.createTimeTable)
  @UseInterceptors(FileInterceptor('file'))
  @ApiBody({ type: [CreateTimeTableDto] })
  async create(@Body() timeTableData: CreateTimeTableDto, @UploadedFile() file) {
    if (file) {
      validateFiles(file);
      timeTableData.file = await uploadFile(file);
    }
    return await this.timeTableService.create(timeTableData);
  }

  @Delete('timeTable/:id')
  @Roles(adminRoles.admin, timeTableRoles.deleteTimeTable)
  async delete(@Param(new ValidateObjectIdPipe('TimeTable')) params) {
    return await this.timeTableService.delete(new ObjectID(params.id));
  }
}
