import { UserModule } from './../users/user.module';
import { AuthMiddleware } from './../users/middlewares/auth.middleware';
import { ClubEntity } from './entities/club.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ClubController } from './club.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubService } from './club.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClubEntity]), UserModule],
  providers: [ClubService],
  controllers: [ClubController],
  exports: [ClubService]
})
export class ClubModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'club/*', method: RequestMethod.DELETE },
        { path: 'club/*', method: RequestMethod.PUT },
        { path: 'club', method: RequestMethod.PUT },
        { path: 'club', method: RequestMethod.POST },
        { path: 'club', method: RequestMethod.PATCH }
      );
  }
}
