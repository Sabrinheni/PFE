import { UserModule } from '../users/user.module';
import { AuthMiddleware } from '../users/middlewares/auth.middleware';
import { PressEntity } from './entities/press.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { PressController } from './press.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressService } from './press.service';

@Module({
  imports: [TypeOrmModule.forFeature([PressEntity]), UserModule],
  providers: [PressService],
  controllers: [PressController],
  exports: [PressService]
})
export class PressModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'presses/archived', method: RequestMethod.GET },
        { path: 'press/*', method: RequestMethod.DELETE },
        { path: 'press/*', method: RequestMethod.PUT },
        { path: 'press', method: RequestMethod.PUT },
        { path: 'press', method: RequestMethod.POST },
        { path: 'press', method: RequestMethod.PATCH }
      );
  }
}
