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
  Injectable,
  Query
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

// Roles
import { adminRoles, clubRoles } from '../../guards/roles.enum';
import { Roles } from '../../shared/decorators';

// HELPERS
import { isFieldUnique } from '../../shared/isFieldUnique.utils';
import { findByField } from '../../shared/findByField.utils';
import { validateImages } from '../../shared/filters.utils';
import { uploadFile } from '../../shared/file-upload.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';

// ENTITY RELATED
import { CreateClubDto, UpdateClubDto } from './dto';
import { ClubEntity } from './entities/club.entity';
import { UserService } from '../users/user.service';
import { ClubService } from './club.service';

@ApiBearerAuth()
@ApiTags('club')
@Controller()
@Injectable()
export class ClubController {
  constructor(
    @InjectRepository(ClubEntity)
    private readonly clubRepository: Repository<ClubEntity>,
    private readonly clubService: ClubService,
    private readonly userService: UserService
  ) {}

  @Get('club/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('Club')) params): Promise<ClubEntity> {
    const club = await findByField(this.clubRepository, { _id: params.id }, true);
    return await this.userService.populateUsers(club);
  }

  @Get('clubs')
  async findAll(): Promise<ClubEntity[]> {
    const clubs = await this.clubService.findAll();
    return await this.userService.populateUsers(clubs);
  }

  @Put('club/:id')
  @ApiBody({ type: [UpdateClubDto] })
  @Roles(adminRoles.admin, clubRoles.updateClub)
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param(new ValidateObjectIdPipe('Club')) params,
    @Body() clubData: UpdateClubDto,
    @UploadedFile() image
  ) {
    // Check if entity exists  throws exception if not exists!
    const toUpdate = await findByField(this.clubRepository, { _id: params.id }, true);
    // Check if entity's title is unique throws exception if not !
    await isFieldUnique(this.clubRepository, { title: clubData.title }, params.id);
    if (image) {
      validateImages(image);
      clubData.image = await uploadFile(image);
    }
    const club = await this.clubService.update(toUpdate, clubData);
    return await this.userService.populateUsers(club);
  }

  @Post('club')
  @Roles(adminRoles.admin, clubRoles.createClub)
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({ type: [CreateClubDto] })
  async create(@Body() clubData: CreateClubDto, @UploadedFile() image) {
    await isFieldUnique(this.clubRepository, { title: clubData.title });
    if (image) {
      validateImages(image);
      clubData.image = await uploadFile(image);
    }
    return await this.clubService.create(clubData);
  }

  @Delete('club/:id')
  @Roles(adminRoles.admin, clubRoles.deleteClub)
  async delete(@Param(new ValidateObjectIdPipe('Club')) params) {
    return await this.clubService.delete(new ObjectID(params.id));
  }
}
