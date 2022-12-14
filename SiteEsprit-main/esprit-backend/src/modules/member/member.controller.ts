import { ProductionEntity } from './../productions/entities/production.entity';
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
import { adminRoles, memberRoles } from '../../guards/roles.enum';
import { Roles } from '../../shared/decorators';

// HELPERS
import { isFieldUnique } from '../../shared/isFieldUnique.utils';
import { findByField } from '../../shared/findByField.utils';
import { validateImages } from '../../shared/filters.utils';
import { uploadFile } from '../../shared/file-upload.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';

// ENTITY RELATED
import { CreateMemberDto, UpdateMemberDto } from './dto';
import { MemberEntity } from './entities/member.entity';
import { UserService } from '../users/user.service';
import { MemberService } from './member.service';
import { ProductionService } from './../productions/production.service';

@ApiBearerAuth()
@ApiTags('member')
@Controller()
@Injectable()
export class MemberController {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly memberRepository: Repository<MemberEntity>,
    private readonly memberService: MemberService,
    private readonly userService: UserService,
    private readonly productionService: ProductionService
  ) {}

  @Get('member/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('RDI')) params): Promise<MemberEntity> {
    const member = await findByField(this.memberRepository, { _id: params.id }, true);
    return await this.userService.populateUsers(member);
  }

  @Get('members')
  async findAll(): Promise<MemberEntity[]> {
    const members = await this.memberService.findAll();
    return this.userService.populateUsers(members);
  }

  @Get('member/slug/:slug')
  @ApiBody({ description: 'slug', required: true })
  async findBySlug(@Param() params): Promise<[MemberEntity, ProductionEntity[]]> {
    const member = await this.memberService.findBySlug(params.slug);
    const productions = await this.productionService.findMemberProductions(member._id.toHexString());
    return [
      await this.userService.populateUsers(member),
      await this.memberService.populateMembers(await this.userService.populateUsers(productions))
    ];
  }

  @Put('member/:id')
  @ApiBody({ type: [UpdateMemberDto] })
  @Roles(adminRoles.admin, memberRoles.updateMember)
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param(new ValidateObjectIdPipe('RDI')) params,
    @Body() memberData: UpdateMemberDto,
    @UploadedFile() image
  ) {
    // Check if entity exists  throws exception if not exists!
    const toUpdate = await findByField(this.memberRepository, { _id: params.id }, true);
    if (image) {
      validateImages(image);
      memberData.image = await uploadFile(image);
    }
    const member = await this.memberService.update(toUpdate, memberData);
    return await this.userService.populateUsers(member);
  }

  @Post('member')
  @Roles(adminRoles.admin, memberRoles.createMember)
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({ type: [CreateMemberDto] })
  async create(@Body() memberData: CreateMemberDto, @UploadedFile() image) {
    if (image) {
      validateImages(image);
      memberData.image = await uploadFile(image);
    }
    return await this.memberService.create(memberData);
  }

  @Delete('member/:id')
  @Roles(adminRoles.admin, memberRoles.deleteMember)
  async delete(@Param(new ValidateObjectIdPipe('RDI')) params) {
    return await this.memberService.delete(new ObjectID(params.id));
  }
}
