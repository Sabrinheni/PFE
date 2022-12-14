import { UserModule } from '../users/user.module';
import { AuthMiddleware } from '../users/middlewares/auth.middleware';
import { TefTefaqEntity } from './entities/teftefaq.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TefTefaqController } from './teftefaq.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TefTefaqService } from './teftefaq.service';

@Module({
  imports: [TypeOrmModule.forFeature([TefTefaqEntity]), UserModule],
  providers: [TefTefaqService],
  controllers: [TefTefaqController],
  exports: [TefTefaqService]
})
export class TefTefaqModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'teftefaqs/archived', method: RequestMethod.GET },
        { path: 'teftefaq/*', method: RequestMethod.DELETE },
        { path: 'teftefaq/*', method: RequestMethod.PUT },
        { path: 'teftefaq', method: RequestMethod.PUT },
        { path: 'teftefaq', method: RequestMethod.POST },
        { path: 'teftefaq/*', method: RequestMethod.PATCH }
      );
  }
}
