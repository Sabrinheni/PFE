import { UserModule } from './../users/user.module';
import { AuthMiddleware } from './../users/middlewares/auth.middleware';
import { TimeTableEntity } from './entities/timeTable.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TimeTableController } from './timeTable.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeTableService } from './timeTable.service';

@Module({
  imports: [TypeOrmModule.forFeature([TimeTableEntity]), UserModule],
  providers: [TimeTableService],
  controllers: [TimeTableController],
  exports: [TimeTableService]
})
export class TimeTableModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'timeTables/archived', method: RequestMethod.GET },
        { path: 'timeTable/*', method: RequestMethod.DELETE },
        { path: 'timeTable/*', method: RequestMethod.PUT },
        { path: 'timeTable', method: RequestMethod.PUT },
        { path: 'timeTable', method: RequestMethod.POST },
        { path: 'timeTable', method: RequestMethod.PATCH }
      );
  }
}
