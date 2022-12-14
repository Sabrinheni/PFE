import { UserModule } from '../users/user.module';
import { AuthMiddleware } from '../users/middlewares/auth.middleware';
import { EspritIngenieurEntity } from './entities/EspritIngenieur.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { EspritIngenieurController } from './EspritIngenieur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspritIngenieurService } from './EspritIngenieur.service';

@Module({
  imports: [TypeOrmModule.forFeature([EspritIngenieurEntity]), UserModule],
  providers: [EspritIngenieurService],
  controllers: [EspritIngenieurController],
  exports: [EspritIngenieurService]
})
export class EspritIngenieurModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'EspritIngenieur/*', method: RequestMethod.DELETE },
        { path: 'EspritIngenieur/*', method: RequestMethod.PUT },
        { path: 'EspritIngenieur', method: RequestMethod.PUT },
        { path: 'EspritIngenieur', method: RequestMethod.POST },
        { path: 'EspritIngenieur', method: RequestMethod.PATCH }
      );
  }
}
