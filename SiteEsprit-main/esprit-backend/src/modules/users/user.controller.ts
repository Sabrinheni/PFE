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
  SerializeOptions
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Roles
import { Roles } from '../../shared/decorators/roles.decorator';
import { adminRoles } from '../../guards/roles.enum';

// HELPERS
import { ValidateObjectIdPipe } from '../../shared/pipes';
import { isFieldUnique } from '../../shared/isFieldUnique.utils';
import { findByField } from '../../shared/findByField.utils';
import { validateImages } from '../../shared/filters.utils';
import { uploadFile } from '../../shared/file-upload.utils';
import { cleaner } from '../../shared/file-cleaner.utils';

// ENTITY RELATED
import { CreateUserDto, UpdateUserDto, LoginUserDto, UpdateNewPasswordDto } from './dto';
import { IUserLogin, IUser } from './interfaces/user.interface';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@ApiBearerAuth()
@ApiTags('user')
@SerializeOptions({
  groups: ['user']
})
@Controller()
@Injectable()
export class UserController {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly userService: UserService
  ) {}

  @Get('users')
  @Roles(adminRoles.admin)
  async findAllUsers(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @Get('user/email/:email')
  @ApiBody({ description: 'email', required: true })
  async findByEmail(@Param() params): Promise<IUser> {
    // throws error 404 if not found
    const user = await findByField(this.userRepository, { email: params.email }, true);
    return this.userService.populateUsers(user);
  }

  @Get('user/username/:username')
  @ApiBody({ description: 'username', required: true })
  async findByUsername(@Param() params): Promise<IUser> {
    // throws error 404 if not found
    const user = await findByField(this.userRepository, { username: params.username }, true);
    return await this.userService.populateUsers(user);
  }

  @Get('user/:id')
  @ApiBody({ description: 'id', required: true })
  async findById(@Param(new ValidateObjectIdPipe('User')) params): Promise<IUser> {
    // throws error 404 if not found
    const user = await findByField(this.userRepository, { id: params.id }, true);
    return await this.userService.populateUsers(user);
  }

  @Post('user/login')
  @ApiBody({ type: [LoginUserDto] })
  async login(@Body() loginUserDto: LoginUserDto): Promise<IUserLogin> {
    // throws error 404 if not found
    const user = await this.userService.login(loginUserDto);

    const token = await this.userService.generateJWT(user);

    return { ...user, token };
  }

  @Post('user/forgot-password/:email')
  @ApiBody({ description: 'email', required: true })
  async forgotPassword(@Param() params): Promise<IUser> {
    // throws error 404 if not found
    const user = await this.userService.forgotPassword(params.email);

    await this.userService.sendResetPasswordEmail(user);
    return user;
  }

  @Post('user/reset-password')
  @ApiBody({ type: [UpdateNewPasswordDto] })
  async updateNewPassword(@Body() updateNewPasswordDto: UpdateNewPasswordDto): Promise<IUser> {
    return await this.userService.updateNewPassword(updateNewPasswordDto);
  }

  @Post('user')
  @Roles(adminRoles.admin, adminRoles.addRoles)
  @ApiBody({ type: [CreateUserDto] })
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() userData: CreateUserDto, @UploadedFile() image): Promise<IUser> {
    // check uniqueness of username/email & throws errors
    await isFieldUnique(this.userRepository, { username: userData.username });
    await isFieldUnique(this.userRepository, { email: userData.email });

    if (image) {
      validateImages(image);
      userData.image = await uploadFile(image);
    }

    return await this.userService.create(userData);
  }

  @Put('user/:id')
  @Roles(adminRoles.admin, adminRoles.addRoles)
  @ApiBody({ type: [UpdateUserDto] })
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param(new ValidateObjectIdPipe('User')) params,
    @Body() userData: UpdateUserDto,
    @UploadedFile() image
  ): Promise<IUser> {
    // Check if id exisits : throws error 404 if not found
    const toUpdate = await findByField(this.userRepository, { id: params.id }, true);

    // check uniqueness of username/email & throws errors
    await isFieldUnique(this.userRepository, { username: userData.username }, params.id);
    await isFieldUnique(this.userRepository, { email: userData.email }, params.id);

    if (image) {
      validateImages(image);
      cleaner(toUpdate.image);
      userData.image = await uploadFile(image);
    }
    return await this.userService.update(toUpdate, userData);
  }

  @Delete('user/:id')
  @Roles(adminRoles.admin)
  async delete(@Param(new ValidateObjectIdPipe('User')) params) {
    // throws error 404 if not found
    return await this.userService.delete(params.id);
  }
}
