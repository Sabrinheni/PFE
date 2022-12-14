import { UserModule } from './../users/user.module';
import { AuthMiddleware } from './../users/middlewares/auth.middleware';
import { UnitEntity } from './entities/unit.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitService } from './unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([UnitEntity]), UserModule],
  providers: [UnitService],
  controllers: [UnitController],
  exports: [UnitService]
})
export class UnitModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'units/archived', method: RequestMethod.GET },
        { path: 'unit/*', method: RequestMethod.DELETE },
        { path: 'unit/*', method: RequestMethod.PUT },
        { path: 'unit', method: RequestMethod.PUT },
        { path: 'unit', method: RequestMethod.POST },
        { path: 'unit', method: RequestMethod.PATCH }
      );
  }
}
