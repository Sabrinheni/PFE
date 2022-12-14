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
import { adminRoles, rdiRoles } from '../../guards/roles.enum';
import { Roles } from '../../shared/decorators';

// HELPERS
import { isFieldUnique } from '../../shared/isFieldUnique.utils';
import { findByField } from '../../shared/findByField.utils';
import { validateImages } from '../../shared/filters.utils';
import { uploadFile } from '../../shared/file-upload.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';

// ENTITY RELATED
import { CreateRdiDto, UpdateRdiDto } from './dto';
import { RdiEntity } from './entities/rdi.entity';
import { UserService } from '../users/user.service';
import { MemberService } from './../member/member.service';
import { RdiService } from './rdi.service';

@ApiBearerAuth()
@ApiTags('rdi')
@Controller()
@Injectable()
export class RdiController {
  constructor(
    @InjectRepository(RdiEntity)
    private readonly rdiRepository: Repository<RdiEntity>,
    private readonly rdiService: RdiService,
    private readonly userService: UserService,
    private readonly memberService: MemberService
  ) {}

  @Get('rdi/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('RDI')) params): Promise<RdiEntity> {
    const rdi = await findByField(this.rdiRepository, { _id: params.id }, true);
    return await this.memberService.populateMembers(await this.userService.populateUsers(rdi));
  }

  @Get('rdis')
  async findAll(): Promise<RdiEntity[]> {
    const rdis = await this.rdiService.findAll();
    return await this.memberService.populateMembers(await this.userService.populateUsers(rdis));
  }

  @Get('rdi/slug/:slug')
  @ApiBody({ description: 'slug', required: true })
  async findBySlug(@Param() params): Promise<RdiEntity> {
    const rdi = await this.rdiService.findBySlug(params.slug);
    return await this.memberService.populateMembers(await this.userService.populateUsers(rdi));
  }

  @Put('rdi/:id')
  @ApiBody({ type: [UpdateRdiDto] })
  @Roles(adminRoles.admin, rdiRoles.updateRdi)
  @UseInterceptors(FileInterceptor('image'))
  async update(@Param(new ValidateObjectIdPipe('RDI')) params, @Body() rdiData: UpdateRdiDto, @UploadedFile() image) {
    // Check if entity exists  throws exception if not exists!
    const toUpdate = await findByField(this.rdiRepository, { _id: params.id }, true);
    // Check if entity's title is unique throws exception if not !
    await isFieldUnique(this.rdiRepository, { title: rdiData.title }, params.id);
    if (image) {
      validateImages(image);
      rdiData.image = await uploadFile(image);
    }
    if (!rdiData.members) {
      toUpdate.members = [];
    }
    if (!rdiData.researchInterests) {
      toUpdate.researchInterests = [];
    }
    const rdi = await this.rdiService.update(toUpdate, rdiData);
    return await this.userService.populateUsers(rdi);
  }

  @Post('rdi')
  @Roles(adminRoles.admin, rdiRoles.createRdi)
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({ type: [CreateRdiDto] })
  async create(@Body() rdiData: CreateRdiDto, @UploadedFile() image) {
    await isFieldUnique(this.rdiRepository, { title: rdiData.title });
    if (image) {
      validateImages(image);
      rdiData.image = await uploadFile(image);
    }
    return await this.rdiService.create(rdiData);
  }

  @Delete('rdi/:id')
  @Roles(adminRoles.admin, rdiRoles.deleteRdi)
  async delete(@Param(new ValidateObjectIdPipe('RDI')) params) {
    return await this.rdiService.delete(new ObjectID(params.id));
  }
}
