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
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

// Roles
import { adminRoles, EspritIngenieurRoles } from '../../guards/roles.enum';
import { Roles } from '../../shared/decorators';

// HELPERS
import { isFieldUnique } from '../../shared/isFieldUnique.utils';
import { findByField } from '../../shared/findByField.utils';
import { ValidateObjectIdPipe } from '../../shared/pipes';

// ENTITY RELATED
import { CreateEspritIngenieurDto, UpdateEspritIngenieurDto } from './dto';
import { EspritIngenieurEntity } from './entities/EspritIngenieur.entity';
import { EspritIngenieurService } from './EspritIngenieur.service';
import { UserService } from '../users/user.service';

@ApiBearerAuth()
@ApiTags('EspritIngenieur')
@Controller()
@Injectable()
export class EspritIngenieurController {
  constructor(
    @InjectRepository(EspritIngenieurEntity)
    private readonly EspritIngenieurRepository: Repository<EspritIngenieurEntity>,
    private readonly EspritIngenieurService: EspritIngenieurService,
    private readonly userService: UserService
  ) {}

  @Get('EspritIngenieur/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('EspritIngenieur')) params): Promise<EspritIngenieurEntity> {
    const EspritIngenieur = await findByField(this.EspritIngenieurRepository, { _id: params.id }, true);
    return await this.userService.populateUsers(EspritIngenieur);
  }

  @Get('EspritIngenieurs')
  async findAll(): Promise<EspritIngenieurEntity[]> {
    const EspritIngenieurs = await this.EspritIngenieurService.findAll();
    return this.userService.populateUsers(EspritIngenieurs);
  }

  @Get('EspritIngenieursHome')
  async findAllHomePage(): Promise<EspritIngenieurEntity[]> {
    const EspritIngenieurs = await this.EspritIngenieurService.findAll();
    let currentIndex = EspritIngenieurs.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = EspritIngenieurs[currentIndex];
      EspritIngenieurs[currentIndex] = EspritIngenieurs[randomIndex];
      EspritIngenieurs[randomIndex] = temporaryValue;
    }
    return EspritIngenieurs.slice(0, 50);
  }

  @Put('EspritIngenieur/:id')
  @ApiBody({ type: [UpdateEspritIngenieurDto] })
  @Roles(adminRoles.admin, EspritIngenieurRoles.updateEspritIngenieur)
  async update(
    @Param(new ValidateObjectIdPipe('EspritIngenieur')) params,
    @Body() EspritIngenieurData: UpdateEspritIngenieurDto,
    
  ) {
    const toUpdate = await findByField(this.EspritIngenieurRepository, { _id: params.id }, true);
    await isFieldUnique(this.EspritIngenieurRepository, { title: EspritIngenieurData.title }, params.id);
   
    const EspritIngenieur = await this.EspritIngenieurService.update(toUpdate, EspritIngenieurData);
    return await this.userService.populateUsers(EspritIngenieur);
  }

  @Post('EspritIngenieur')
  @Roles(adminRoles.admin, EspritIngenieurRoles.createEspritIngenieur)
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({ type: [CreateEspritIngenieurDto] })
  async create(@Body() EspritIngenieurData: CreateEspritIngenieurDto) {
    await isFieldUnique(this.EspritIngenieurRepository, { title: EspritIngenieurData.title });
  
    return await this.EspritIngenieurService.create(EspritIngenieurData);
  }

  @Delete('EspritIngenieur/:id')
  @Roles(adminRoles.admin, EspritIngenieurRoles.deleteEspritIngenieur)
  async delete(@Param(new ValidateObjectIdPipe('EspritIngenieur')) params) {
    return await this.EspritIngenieurService.delete(new ObjectID(params.id));
  }
}
