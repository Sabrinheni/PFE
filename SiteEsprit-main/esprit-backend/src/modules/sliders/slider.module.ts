import { UserModule } from './../users/user.module';
import { AuthMiddleware } from './../users/middlewares/auth.middleware';
import { SliderEntity } from './entities/slider.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { SliderController } from './slider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SliderService } from './slider.service';

@Module({
  imports: [TypeOrmModule.forFeature([SliderEntity]), UserModule],
  providers: [SliderService],
  controllers: [SliderController],
  exports: [SliderService]
})
export class SliderModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'sliders/archived', method: RequestMethod.GET },
        { path: 'sliders/*/archived', method: RequestMethod.GET },
        { path: 'slider/*', method: RequestMethod.DELETE },
        { path: 'slider/*', method: RequestMethod.PUT },
        { path: 'slider', method: RequestMethod.PUT },
        { path: 'slider', method: RequestMethod.POST },
        { path: 'slider', method: RequestMethod.PATCH }
      );
  }
}
