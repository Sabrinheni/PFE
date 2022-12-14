import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { PressEntity } from '../entities/press.entity';
import { PressService } from '../press.service';
import { PressController } from '../press.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ObjectID } from 'mongodb';
import { pressTypes } from '../entities/press.enum';

describe('PressController (e2e)', () => {
  let app: INestApplication;
  const mockPress = new PressEntity();
  mockPress._id = new ObjectID('5e2f63d67c06a754d05da4b6');
  mockPress.title = 'mockingTitle';
  mockPress.description = 'mockingTitleDescription';
  mockPress.type = pressTypes.article;

  const notFoundException = {
    statusCode: 400,
    error: 'Bad Request',
    message: 'Invalid ID!'
  };
  const idRequiredException = {
    statusCode: 404,
    error: 'Not Found',
    message: 'Cannot GET /press/'
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // imports: [AppModule],
      controllers: [PressController],
      providers: [
        {
          provide: PressService,
          useFactory: () => ({
            findAll: jest.fn(() => ['new PressEntity()']),
            findById: jest.fn(id => {
              if (!id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return mockPress;
              } else {
                throw new HttpException({ Press: 'Not found' }, 400);
              }
            }),
            create: jest.fn(pressData => {
              if (!pressData) {
                throw new HttpException({ Press: 'Not found' }, 400);
              }
              return mockPress;
            }),
            update: jest.fn((_id, pressData) => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                pressData._id = mockPress._id;
                return pressData;
              } else {
                throw new HttpException({ Press: 'Not found' }, 400);
              }
            }),
            delete: jest.fn(_id => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return {};
              } else {
                throw new HttpException({ Press: 'Not found' }, 400);
              }
            })
          })
        }
      ]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/presss (GET) GET ALL', () => {
    it('/presss', () => {
      return request(app.getHttpServer())
        .get('/presss')
        .expect(200)
        .expect(['new PressEntity()']);
    });
  });

  describe('/press/:id (GET)', () => {
    it('/press/:id (GET) 200', () => {
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: pressTypes.article,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .get('/press/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/press/:id (GET) NO ID 400', () => {
      return (
        request(app.getHttpServer())
          .get('/press/')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect(idRequiredException)
      );
    });

    it('/press/:id (GET) Invalid 400', () => {
      return (
        request(app.getHttpServer())
          .get('/press/5e2f63d67c06a7')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect(notFoundException)
      );
    });
  });

  describe('/press (POST)', () => {
    it('/press (POST) 201', () => {
      const toSend = {
        title: 'mockingTitle',
        type: pressTypes.article,
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: pressTypes.article,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .post('/press')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(201)
          .expect(expected)
      );
    });

    it('/press (POST) 400 Invalid DTO or empty body', () => {
      const toSend = {
        title: 'mockingTitle',
        type: pressTypes.article
        // titleDescription: 'mockingTitleDescription',
        // btnName: 'mockingBtnName',
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: pressTypes.article,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .post('/press')
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

  describe('/press (PUT)', () => {
    it('/press (PUT) 200 OK', () => {
      const toSend = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: pressTypes.article,
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: pressTypes.article,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .put('/press')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/press (PUT) 400 Invalid DTO or empty body', () => {
      const toSend = {
        // title: 'mockingTitle',
        // type: pressTypes.article,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .put('/press')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Press: 'Not found' }) &&
        request(app.getHttpServer())
          .put('/press')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Press: 'Not found' })
      );
    });
  });

  describe('/press (DELETE)', () => {
    it('/press (DELETE) 200', () => {
      return (
        request(app.getHttpServer())
          .delete('/press/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect({})
      );
    });

    it('/press (DELETE) 400 Not Found or Id Is empty', () => {
      return (
        request(app.getHttpServer())
          .delete('/press/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Press: 'Not found' }) &&
        request(app.getHttpServer())
          .delete('/press')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect({
            statusCode: 404,
            error: 'Not Found',
            message: 'Cannot DELETE /press'
          })
      );
    });
  });
});
