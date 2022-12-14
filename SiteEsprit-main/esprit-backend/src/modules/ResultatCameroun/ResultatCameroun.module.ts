import { UserModule } from '../users/user.module';
import { AuthMiddleware } from '../users/middlewares/auth.middleware';
import { ResultatCamerounEntity } from './entities/ResultatCameroun.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ResultatCamerounController } from './ResultatCameroun.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultatCamerounService } from './ResultatCameroun.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResultatCamerounEntity]), UserModule],
  providers: [ResultatCamerounService],
  controllers: [ResultatCamerounController],
  exports: [ResultatCamerounService]
})
export class ResultatCamerounModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'ResultatCameroun/*', method: RequestMethod.DELETE },
        { path: 'ResultatCameroun/*', method: RequestMethod.PUT },
        { path: 'ResultatCameroun', method: RequestMethod.PUT },
        { path: 'ResultatCameroun', method: RequestMethod.POST },
        { path: 'ResultatCameroun', method: RequestMethod.PATCH }
      );
  }
}
