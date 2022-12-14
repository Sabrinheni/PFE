import { UserModule } from '../users/user.module';
import { AuthMiddleware } from '../users/middlewares/auth.middleware';
import { EventEntity } from './entities/event.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from './event.service';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity]), UserModule],
  providers: [EventService],
  controllers: [EventController],
  exports: [EventService]
})
export class EventModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'events/archived', method: RequestMethod.GET },
        { path: 'events/*/archived', method: RequestMethod.GET },
        { path: 'event/*', method: RequestMethod.DELETE },
        { path: 'event/*', method: RequestMethod.PUT },
        { path: 'event', method: RequestMethod.PUT },
        { path: 'event', method: RequestMethod.POST },
        { path: 'event/*', method: RequestMethod.PATCH }
      );
  }
}
