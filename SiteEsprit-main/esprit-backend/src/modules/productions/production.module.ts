import { AuthMiddleware } from './../users/middlewares/auth.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ProductionController } from './production.controller';
import { ProductionService } from './production.service';
import { UserModule } from './../users/user.module';
import { ProductionEntity } from './entities/production.entity';
import { MemberModule } from '../member/member.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductionEntity]), UserModule, MemberModule],
  providers: [ProductionService],
  controllers: [ProductionController],
  exports: [ProductionService]
})
export class ProductionModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'production/*', method: RequestMethod.DELETE },
        { path: 'production/*', method: RequestMethod.PUT },
        { path: 'production', method: RequestMethod.PUT },
        { path: 'production', method: RequestMethod.POST }
      );
  }
}
