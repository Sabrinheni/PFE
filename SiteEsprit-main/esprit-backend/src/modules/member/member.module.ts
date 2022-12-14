import { ProductionModule } from './../productions/production.module';
import { RdiModule } from './../rdi/rdi.module';
import { UserModule } from './../users/user.module';
import { AuthMiddleware } from './../users/middlewares/auth.middleware';
import { MemberEntity } from './entities/member.entity';
import { forwardRef, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MemberController } from './member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberService } from './member.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MemberEntity]),
    UserModule,
    forwardRef(() => RdiModule),
    forwardRef(() => ProductionModule)
  ],
  providers: [MemberService],
  controllers: [MemberController],
  exports: [MemberService]
})
export class MemberModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'member/*', method: RequestMethod.DELETE },
        { path: 'member/*', method: RequestMethod.PUT },
        { path: 'member', method: RequestMethod.PUT },
        { path: 'member', method: RequestMethod.POST },
        { path: 'member', method: RequestMethod.PATCH }
      );
  }
}
