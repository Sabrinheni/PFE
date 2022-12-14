import { UserModule } from './../users/user.module';
import { AuthMiddleware } from './../users/middlewares/auth.middleware';
import { PartnershipEntity } from './entities/partnership.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { PartnershipController } from './partnership.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnershipService } from './partnership.service';

@Module({
  imports: [TypeOrmModule.forFeature([PartnershipEntity]), UserModule],
  providers: [PartnershipService],
  controllers: [PartnershipController],
  exports: [PartnershipService]
})
export class PartnershipModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'partnership/*', method: RequestMethod.DELETE },
        { path: 'partnership/*', method: RequestMethod.PUT },
        { path: 'partnership', method: RequestMethod.PUT },
        { path: 'partnership', method: RequestMethod.POST },
        { path: 'partnership', method: RequestMethod.PATCH }
      );
  }
}
