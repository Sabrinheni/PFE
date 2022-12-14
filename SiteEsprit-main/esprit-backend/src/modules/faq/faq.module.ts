import { UserModule } from './../users/user.module';
import { AuthMiddleware } from './../users/middlewares/auth.middleware';
import { FaqEntity } from './entities/faq.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { FaqController } from './faq.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaqService } from './faq.service';

@Module({
  imports: [TypeOrmModule.forFeature([FaqEntity]), UserModule],
  providers: [FaqService],
  controllers: [FaqController],
  exports: [FaqService]
})
export class FaqModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'faq/*', method: RequestMethod.DELETE },
        { path: 'faq/*', method: RequestMethod.PUT },
        { path: 'faq', method: RequestMethod.PUT },
        { path: 'faq', method: RequestMethod.POST },
        { path: 'faq', method: RequestMethod.PATCH }
      );
  }
}
