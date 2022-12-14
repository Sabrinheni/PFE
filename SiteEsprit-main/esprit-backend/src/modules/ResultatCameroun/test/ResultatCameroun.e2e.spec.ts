import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { ResultatCamerounEntity } from '../entities/ResultatCameroun.entity';
import { ResultatCamerounService } from '../ResultatCameroun.service';
import { ResultatCamerounController } from '../ResultatCameroun.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ObjectID } from 'mongodb';
import { ResultatCamerounTypes } from '../entities/ResultatCameroun.enum';

describe('ResultatCamerounController (e2e)', () => {
  let app: INestApplication;
  const mockResultatCameroun = new ResultatCamerounEntity();
  mockResultatCameroun._id = new ObjectID('5e2f63d67c06a754d05da4b6');
  mockResultatCameroun.title = 'mockingTitle';
  mockResultatCameroun.description = 'mockingTitleDescription';
  mockResultatCameroun.type = ResultatCamerounTypes.Techsession1;

  const notFoundException = {
    statusCode: 400,
    error: 'Bad Request',
    message: 'Invalid ID!'
  };
  const idRequiredException = {
    statusCode: 404,
    error: 'Not Found',
    message: 'Cannot GET /ResultatCameroun/'
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // imports: [AppModule],
      controllers: [ResultatCamerounController],
      providers: [
        {
          provide: ResultatCamerounService,
          useFactory: () => ({
            findAll: jest.fn(() => ['new ResultatCamerounEntity()']),
            findById: jest.fn(id => {
              if (!id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return mockResultatCameroun;
              } else {
                throw new HttpException({ ResultatCameroun: 'Not found' }, 400);
              }
            }),
            create: jest.fn(ResultatCamerounData => {
              if (!ResultatCamerounData) {
                throw new HttpException({ ResultatCameroun: 'Not found' }, 400);
              }
              return mockResultatCameroun;
            }),
            update: jest.fn((_id, ResultatCamerounData) => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                ResultatCamerounData._id = mockResultatCameroun._id;
                return ResultatCamerounData;
              } else {
                throw new HttpException({ ResultatCameroun: 'Not found' }, 400);
              }
            }),
            delete: jest.fn(_id => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return {};
              } else {
                throw new HttpException({ ResultatCameroun: 'Not found' }, 400);
              }
            })
          })
        }
      ]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/ResultatCamerouns (GET) GET ALL', () => {
    it('/ResultatCamerouns', () => {
      return request(app.getHttpServer())
        .get('/ResultatCamerouns')
        .expect(200)
        .expect(['new ResultatCamerounEntity()']);
    });
  });

  describe('/ResultatCameroun/:id (GET)', () => {
    it('/ResultatCameroun/:id (GET) 200', () => {
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: ResultatCamerounTypes.Techsession1,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .get('/ResultatCameroun/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/ResultatCameroun/:id (GET) NO ID 400', () => {
      return (
        request(app.getHttpServer())
          .get('/ResultatCameroun/')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect(idRequiredException)
      );
    });

    it('/ResultatCameroun/:id (GET) Invalid 400', () => {
      return (
        request(app.getHttpServer())
          .get('/ResultatCameroun/5e2f63d67c06a7')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect(notFoundException)
      );
    });
  });

  describe('/ResultatCameroun (POST)', () => {
    it('/ResultatCameroun (POST) 201', () => {
      const toSend = {
        title: 'mockingTitle',
        type: ResultatCamerounTypes.Techsession1,
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: ResultatCamerounTypes.Techsession1,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .post('/ResultatCameroun')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(201)
          .expect(expected)
      );
    });

    it('/ResultatCameroun (POST) 400 Invalid DTO or empty body', () => {
      const toSend = {
        title: 'mockingTitle',
        type: ResultatCamerounTypes.Techsession1
        // titleDescription: 'mockingTitleDescription',
        // btnName: 'mockingBtnName',
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: ResultatCamerounTypes.Techsession1,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .post('/ResultatCameroun')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({
            message: 'Input data validation failed',
            errors: {
              titleisNotEmpty: 'title should not be empty',
              typeisEnum: 'type must be a valid enum value',
              typeisNotEmpty: 'type should not be empty'
            }
          })
      );
    });
  });

  describe('/ResultatCameroun (PUT)', () => {
    it('/ResultatCameroun (PUT) 200 OK', () => {
      const toSend = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: ResultatCamerounTypes.Techsession1,
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: ResultatCamerounTypes.Techsession1,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .put('/ResultatCameroun')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/ResultatCameroun (PUT) 400 Invalid DTO or empty body', () => {
      const toSend = {
        // title: 'mockingTitle',
        // type: ResultatCamerounTypes.Techsession1,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .put('/ResultatCameroun')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ ResultatCameroun: 'Not found' }) &&
        request(app.getHttpServer())
          .put('/ResultatCameroun')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ ResultatCameroun: 'Not found' })
      );
    });
  });

  describe('/ResultatCameroun (DELETE)', () => {
    it('/ResultatCameroun (DELETE) 200', () => {
      return (
        request(app.getHttpServer())
          .delete('/ResultatCameroun/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect({})
      );
    });

    it('/ResultatCameroun (DELETE) 400 Not Found or Id Is empty', () => {
      return (
        request(app.getHttpServer())
          .delete('/ResultatCameroun/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ ResultatCameroun: 'Not found' }) &&
        request(app.getHttpServer())
          .delete('/ResultatCameroun')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect({
            statusCode: 404,
            error: 'Not Found',
            message: 'Cannot DELETE /ResultatCameroun'
          })
      );
    });
  });
});
