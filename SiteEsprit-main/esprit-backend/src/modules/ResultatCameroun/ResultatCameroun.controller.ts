import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Controller,
  UseInterceptors,
  Injectable
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { FileInterceptor } from '@nestjs/platform-express';

// Roles
import { adminRoles, ResultatCamerounRoles } from '../../guards/roles.enum';
import { Roles } from '../../shared/decorators';

// HELPERS
import { isFieldUnique } from '../../shared/isFieldUnique.utils';
import { findByField } from '../../shared/findByField.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';

// ENTITY RELATED
import { CreateResultatCamerounDto, UpdateResultatCamerounDto } from './dto';
import { ResultatCamerounEntity } from './entities/ResultatCameroun.entity';
import { ResultatCamerounService } from './ResultatCameroun.service';
import { UserService } from '../users/user.service';

@ApiBearerAuth()
@ApiTags('ResultatCameroun')
@Controller()
@Injectable()
export class ResultatCamerounController {
  constructor(
    @InjectRepository(ResultatCamerounEntity)
    private readonly ResultatCamerounRepository: Repository<ResultatCamerounEntity>,
    private readonly ResultatCamerounService: ResultatCamerounService,
    private readonly userService: UserService
  ) {}

  @Get('ResultatCameroun/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe(' ResultatCameroun')) params): Promise<ResultatCamerounEntity> {
    const ResultatCameroun = await findByField(this.ResultatCamerounRepository, { _id: params.id }, true);
    return await this.userService.populateUsers(ResultatCameroun);
  }

  @Get('ResultatCamerouns')
  async findAll(): Promise<ResultatCamerounEntity[]> {
    const ResultatCamerouns = await this.ResultatCamerounService.findAll();
    return this.userService.populateUsers(ResultatCamerouns);
  }

  @Get('ResultatCamerounsHome')
  async findAllHomePage(): Promise<ResultatCamerounEntity[]> {
    const ResultatCamerouns = await this.ResultatCamerounService.findAll();
    let currentIndex = ResultatCamerouns.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = ResultatCamerouns[currentIndex];
      ResultatCamerouns[currentIndex] = ResultatCamerouns[randomIndex];
      ResultatCamerouns[randomIndex] = temporaryValue;
    }
    return ResultatCamerouns.slice(0, 50);
  }

  @Put('ResultatCameroun/:id')
  @ApiBody({ type: [UpdateResultatCamerounDto] })
  @Roles(adminRoles.admin, ResultatCamerounRoles.updateResultatCameroun)

  async update(
    @Param(new ValidateObjectIdPipe('ResultatCameroun')) params,
    @Body() ResultatCamerounData: UpdateResultatCamerounDto,
  
  ) {
    const toUpdate = await findByField(this.ResultatCamerounRepository, { _id: params.id }, true);
    await isFieldUnique(this.ResultatCamerounRepository, { title: ResultatCamerounData.title }, params.id);
   
    const ResultatCameroun = await this.ResultatCamerounService.update(toUpdate, ResultatCamerounData);
    return await this.userService.populateUsers(ResultatCameroun);
  }

  @Post('ResultatCameroun')
  @Roles(adminRoles.admin, ResultatCamerounRoles.createResultatCameroun)
  @UseInterceptors(FileInterceptor('image'))
 @ApiBody({ type: [CreateResultatCamerounDto] })
  async create(@Body() ResultatCamerounData: CreateResultatCamerounDto) {
    await isFieldUnique(this.ResultatCamerounRepository, { title: ResultatCamerounData.title });
  
    return await this.ResultatCamerounService.create(ResultatCamerounData);
  }

  @Delete('ResultatCameroun/:id')
  @Roles(adminRoles.admin, ResultatCamerounRoles.deleteResultatCameroun)
  async delete(@Param(new ValidateObjectIdPipe('ResultatCameroun')) params) {
    return await this.ResultatCamerounService.delete(new ObjectID(params.id));
  }
}
