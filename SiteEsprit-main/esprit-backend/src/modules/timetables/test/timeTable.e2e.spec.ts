import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { TimeTableEntity } from './../entities/timeTable.entity';
import { TimeTableService } from './../timeTable.service';
import { TimeTableController } from './../timeTable.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ObjectID } from 'mongodb';
import { timeTableTitles } from '../entities/timeTable.enum';

describe('TimeTableController (e2e)', () => {
  let app: INestApplication;
  const mockTimeTable = new TimeTableEntity();
  mockTimeTable._id = new ObjectID('5e2f63d67c06a754d05da4b6');
  mockTimeTable.title = timeTableTitles.CalendrierGeneral;

  const notFoundException = {
    statusCode: 400,
    error: 'Bad Request',
    message: 'Invalid ID!'
  };
  const idRequiredException = {
    statusCode: 404,
    error: 'Not Found',
    message: 'Cannot GET /timeTable/'
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // imports: [AppModule],
      controllers: [TimeTableController],
      providers: [
        {
          provide: TimeTableService,
          useFactory: () => ({
            findAll: jest.fn(() => ['new TimeTableEntity()']),
            findById: jest.fn(id => {
              if (!id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return mockTimeTable;
              } else {
                throw new HttpException({ TimeTable: 'Not found' }, 400);
              }
            }),
            create: jest.fn(timeTableData => {
              if (!timeTableData) {
                throw new HttpException({ TimeTable: 'Not found' }, 400);
              }
              return mockTimeTable;
            }),
            update: jest.fn((_id, timeTableData) => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                timeTableData._id = mockTimeTable._id;
                return timeTableData;
              } else {
                throw new HttpException({ TimeTable: 'Not found' }, 400);
              }
            }),
            delete: jest.fn(_id => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return {};
              } else {
                throw new HttpException({ TimeTable: 'Not found' }, 400);
              }
            })
          })
        }
      ]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/timeTables (GET) GET ALL', () => {
    it('/timeTables', () => {
      return request(app.getHttpServer())
        .get('/timeTables')
        .expect(200)
        .expect(['new TimeTableEntity()']);
    });
  });

  describe('/timeTable/:id (GET)', () => {
    it('/timeTable/:id (GET) 200', () => {
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: timeTableTitles.CalendrierGeneral
      };
      return (
        request(app.getHttpServer())
          .get('/timeTable/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/timeTable/:id (GET) NO ID 400', () => {
      return (
        request(app.getHttpServer())
          .get('/timeTable/')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect(idRequiredException)
      );
    });

    it('/timeTable/:id (GET) Invalid 400', () => {
      return (
        request(app.getHttpServer())
          .get('/timeTable/5e2f63d67c06a7')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect(notFoundException)
      );
    });
  });

  describe('/timeTable (POST)', () => {
    it('/timeTable (POST) 201', () => {
      const toSend = {
        title: timeTableTitles.CalendrierGeneral
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: timeTableTitles.CalendrierGeneral
      };
      return (
        request(app.getHttpServer())
          .post('/timeTable')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(201)
          .expect(expected)
      );
    });

    it('/timeTable (POST) 400 Invalid DTO or empty body', () => {
      const toSend = {
        title: 'timeTableTitles.CalendrierGeneral'
        // status: true,
        // titleDescription: 'mockingTitleDescription',
        // btnName: 'mockingBtnName',
      };
      return (
        request(app.getHttpServer())
          .post('/timeTable')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({
            message: 'Input data validation failed',
            errors: {
              titleisEnum: 'title must be a valid enum value',
              titleisNotEmpty: 'title should not be empty'
            }
          }) &&
        request(app.getHttpServer())
          .post('/timeTable')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({
            message: 'Input data validation failed',
            errors: {
              titleisEnum: 'title must be a valid enum value',
              titleisNotEmpty: 'title should not be empty'
            }
          })
      );
    });
  });

  describe('/timeTable (PUT)', () => {
    it('/timeTable (PUT) 200 OK', () => {
      const toSend = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: timeTableTitles.CalendrierRattrapage
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: timeTableTitles.CalendrierRattrapage
      };
      return (
        request(app.getHttpServer())
          .put('/timeTable')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/timeTable (PUT) 400 Invalid DTO or empty body', () => {
      const toSend = {
        title: timeTableTitles.CalendrierGeneral
      };
      return (
        request(app.getHttpServer())
          .put('/timeTable')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ TimeTable: 'Not found' }) &&
        request(app.getHttpServer())
          .put('/timeTable')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ TimeTable: 'Not found' })
      );
    });
  });

  describe('/timeTable (DELETE)', () => {
    it('/timeTable (DELETE) 200', () => {
      return (
        request(app.getHttpServer())
          .delete('/timeTable/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect({})
      );
    });

    it('/timeTable (DELETE) 400 Not Found or Id Is empty', () => {
      return (
        request(app.getHttpServer())
          .delete('/timeTable/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ TimeTable: 'Not found' }) &&
        request(app.getHttpServer())
          .delete('/timeTable')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect({
            statusCode: 404,
            error: 'Not Found',
            message: 'Cannot DELETE /timeTable'
          })
      );
    });
  });
});
