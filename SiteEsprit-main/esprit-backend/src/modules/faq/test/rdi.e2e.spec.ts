import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { RdiEntity } from './../entities/rdi.entity';
import { RdiService } from './../rdi.service';
import { RdiController } from './../rdi.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ObjectID } from 'mongodb';

describe('RdiController (e2e)', () => {
  let app: INestApplication;
  const mockRdi = new RdiEntity();
  mockRdi._id = new ObjectID('5e2f63d67c06a754d05da4b6');
  mockRdi.title = 'mockingTitle';
  mockRdi.description = 'mockingTitleDescription';
  mockRdi.members = ['one', 'two', 'ect'];

  const notFoundException = {
    statusCode: 400,
    error: 'Bad Request',
    message: 'Invalid ID!'
  };
  const idRequiredException = {
    statusCode: 404,
    error: 'Not Found',
    message: 'Cannot GET /rdi/'
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // imports: [AppModule],
      controllers: [RdiController],
      providers: [
        {
          provide: RdiService,
          useFactory: () => ({
            findAll: jest.fn(() => ['new RdiEntity()']),
            findById: jest.fn(id => {
              if (!id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return mockRdi;
              } else {
                throw new HttpException({ Rdi: 'Not found' }, 400);
              }
            }),
            create: jest.fn(rdiData => {
              if (!rdiData) {
                throw new HttpException({ Rdi: 'Not found' }, 400);
              }
              return mockRdi;
            }),
            update: jest.fn((_id, rdiData) => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                rdiData._id = mockRdi._id;
                return rdiData;
              } else {
                throw new HttpException({ Rdi: 'Not found' }, 400);
              }
            }),
            delete: jest.fn(_id => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return {};
              } else {
                throw new HttpException({ Rdi: 'Not found' }, 400);
              }
            })
          })
        }
      ]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/rdis (GET) GET ALL', () => {
    it('/rdis', () => {
      return request(app.getHttpServer())
        .get('/rdis')
        .expect(200)
        .expect(['new RdiEntity()']);
    });
  });

  describe('/rdi/:id (GET)', () => {
    it('/rdi/:id (GET) 200', () => {
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        members: ['one', 'two', 'ect'],
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .get('/rdi/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/rdi/:id (GET) NO ID 400', () => {
      return (
        request(app.getHttpServer())
          .get('/rdi/')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect(idRequiredException)
      );
    });

    it('/rdi/:id (GET) Invalid 400', () => {
      return (
        request(app.getHttpServer())
          .get('/rdi/5e2f63d67c06a7')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect(notFoundException)
      );
    });
  });

  describe('/rdi (POST)', () => {
    it('/rdi (POST) 201', () => {
      const toSend = {
        title: 'mockingTitle',
        members: ['one', 'two', 'ect'],
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        members: ['one', 'two', 'ect'],
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .post('/rdi')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(201)
          .expect(expected)
      );
    });

    it('/rdi (POST) 400 Invalid DTO or empty body', () => {
      const toSend = {
        title: 'mockingTitle'
        // status: true,
        // titleDescription: 'mockingTitleDescription',
        // btnName: 'mockingBtnName',
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        members: ['one', 'two', 'ect'],
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .post('/rdi')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({
            message: 'Input data validation failed',
            errors: {
              titleisNotEmpty: 'title should not be empty'
              // titleDescriptionisNotEmpty:
              //   'titleDescription should not be empty',
              // btnNameisNotEmpty: 'btnName should not be empty',
            }
          })
      );
    });
  });

  describe('/rdi (PUT)', () => {
    it('/rdi (PUT) 200 OK', () => {
      const toSend = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        members: ['one', 'two', 'ect'],
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        members: ['one', 'two', 'ect'],
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .put('/rdi')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/rdi (PUT) 400 Invalid DTO or empty body', () => {
      const toSend = {
        title: 'mockingTitle',
        members: ['one', 'two', 'ect'],
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .put('/rdi')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Rdi: 'Not found' }) &&
        request(app.getHttpServer())
          .put('/rdi')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Rdi: 'Not found' })
      );
    });
  });

  describe('/rdi (DELETE)', () => {
    it('/rdi (DELETE) 200', () => {
      return (
        request(app.getHttpServer())
          .delete('/rdi/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect({})
      );
    });

    it('/rdi (DELETE) 400 Not Found or Id Is empty', () => {
      return (
        request(app.getHttpServer())
          .delete('/rdi/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Rdi: 'Not found' }) &&
        request(app.getHttpServer())
          .delete('/rdi')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect({
            statusCode: 404,
            error: 'Not Found',
            message: 'Cannot DELETE /rdi'
          })
      );
    });
  });
});
