import { CreateProductionDto } from './dto/create-production.dto';
import { findByField } from 'src/shared/findByField.utils';
import { UpdateProductionDto } from './dto/update-production.dto';
import { ObjectID } from 'mongodb';
import { adminRoles, productionRoles } from './../../guards/roles.enum';
import { Roles } from './../../shared/decorators/roles.decorator';
import { ValidateObjectIdPipe } from './../../shared/pipes/validateObjectId.pipe';
import { UserService } from './../users/user.service';
import { ProductionService } from './production.service';
import { ProductionEntity } from './entities/production.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Controller, Injectable, Get, Param, Delete, Body, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
import { Repository } from 'typeorm';
import { isFieldUnique } from 'src/shared/isFieldUnique.utils';
import { MemberService } from '../member/member.service';

@ApiTags('production')
@Controller()
@Injectable()
export class ProductionController {
  constructor(
    @InjectRepository(ProductionEntity)
    private readonly productionRepository: Repository<ProductionEntity>,
    private readonly productionService: ProductionService,
    private readonly userService: UserService,
    private readonly memberService: MemberService
  ) {}

  @Get('productions')
  async findAll(): Promise<ProductionEntity[]> {
    const productions = await this.productionService.findAll();
    return await this.memberService.populateMembers(await this.userService.populateUsers(productions));
  }

  @Get('productions/esprit')
  async findEspritProductions(): Promise<ProductionEntity[]> {
    const productions = await this.productionService.findAll({ inEsprit: true });
    return await this.memberService.populateMembers(await this.userService.populateUsers(productions));
  }

  @Get('production/:id')
  @ApiBody({ description: 'id', required: true })
  async findMe(@Param(new ValidateObjectIdPipe('PRODUCTION')) params): Promise<ProductionEntity> {
    const production = await findByField(this.productionRepository, { _id: params.id }, true);
    return await this.userService.populateUsers(production);
  }

  @Delete('production/:id')
  @Roles(adminRoles.admin, productionRoles.deleteProduction)
  async delete(@Param(new ValidateObjectIdPipe('PRODUCTION')) params) {
    return await this.productionService.delete(new ObjectID(params.id));
  }

  @Put('production/:id')
  @ApiBody({ type: [UpdateProductionDto] })
  @Roles(adminRoles.admin, productionRoles.updateProduction)
  async update(@Param(new ValidateObjectIdPipe('PRODUCTION')) params, @Body() productionData: UpdateProductionDto) {
    const toUpdate = await findByField(this.productionRepository, { _id: params.id }, true);
    await isFieldUnique(this.productionRepository, { title: productionData.description }, params.id);
    const production = await this.productionService.update(toUpdate, productionData);
    return await this.userService.populateUsers(production);
  }

  @Post('production')
  @Roles(adminRoles.admin, productionRoles.createProduction)
  @ApiBody({ type: [CreateProductionDto] })
  async create(@Body() productionData: CreateProductionDto) {
    return await this.productionService.create(productionData);
  }
}
