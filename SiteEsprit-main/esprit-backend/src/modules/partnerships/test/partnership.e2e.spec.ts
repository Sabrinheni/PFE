import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { PartnershipEntity } from './../entities/partnership.entity';
import { PartnershipService } from './../partnership.service';
import { PartnershipController } from './../partnership.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ObjectID } from 'mongodb';
import { partnershipTypes } from '../entities/partnership.enum';

describe('PartnershipController (e2e)', () => {
  let app: INestApplication;
  const mockPartnership = new PartnershipEntity();
  mockPartnership._id = new ObjectID('5e2f63d67c06a754d05da4b6');
  mockPartnership.title = 'mockingTitle';
  mockPartnership.description = 'mockingTitleDescription';
  mockPartnership.type = partnershipTypes.academic;

  const notFoundException = {
    statusCode: 400,
    error: 'Bad Request',
    message: 'Invalid ID!'
  };
  const idRequiredException = {
    statusCode: 404,
    error: 'Not Found',
    message: 'Cannot GET /partnership/'
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // imports: [AppModule],
      controllers: [PartnershipController],
      providers: [
        {
          provide: PartnershipService,
          useFactory: () => ({
            findAll: jest.fn(() => ['new PartnershipEntity()']),
            findById: jest.fn(id => {
              if (!id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return mockPartnership;
              } else {
                throw new HttpException({ Partnership: 'Not found' }, 400);
              }
            }),
            create: jest.fn(partnershipData => {
              if (!partnershipData) {
                throw new HttpException({ Partnership: 'Not found' }, 400);
              }
              return mockPartnership;
            }),
            update: jest.fn((_id, partnershipData) => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                partnershipData._id = mockPartnership._id;
                return partnershipData;
              } else {
                throw new HttpException({ Partnership: 'Not found' }, 400);
              }
            }),
            delete: jest.fn(_id => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return {};
              } else {
                throw new HttpException({ Partnership: 'Not found' }, 400);
              }
            })
          })
        }
      ]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/partnerships (GET) GET ALL', () => {
    it('/partnerships', () => {
      return request(app.getHttpServer())
        .get('/partnerships')
        .expect(200)
        .expect(['new PartnershipEntity()']);
    });
  });

  describe('/partnership/:id (GET)', () => {
    it('/partnership/:id (GET) 200', () => {
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: partnershipTypes.academic,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .get('/partnership/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/partnership/:id (GET) NO ID 400', () => {
      return (
        request(app.getHttpServer())
          .get('/partnership/')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect(idRequiredException)
      );
    });

    it('/partnership/:id (GET) Invalid 400', () => {
      return (
        request(app.getHttpServer())
          .get('/partnership/5e2f63d67c06a7')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect(notFoundException)
      );
    });
  });

  describe('/partnership (POST)', () => {
    it('/partnership (POST) 201', () => {
      const toSend = {
        title: 'mockingTitle',
        type: partnershipTypes.academic,
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: partnershipTypes.academic,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .post('/partnership')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(201)
          .expect(expected)
      );
    });

    it('/partnership (POST) 400 Invalid DTO or empty body', () => {
      const toSend = {
        title: 'mockingTitle',
        type: partnershipTypes.academic
        // titleDescription: 'mockingTitleDescription',
        // btnName: 'mockingBtnName',
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: partnershipTypes.academic,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .post('/partnership')
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

  describe('/partnership (PUT)', () => {
    it('/partnership (PUT) 200 OK', () => {
      const toSend = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: partnershipTypes.academic,
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: partnershipTypes.academic,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .put('/partnership')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/partnership (PUT) 400 Invalid DTO or empty body', () => {
      const toSend = {
        // title: 'mockingTitle',
        // type: partnershipTypes.academic,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .put('/partnership')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Partnership: 'Not found' }) &&
        request(app.getHttpServer())
          .put('/partnership')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Partnership: 'Not found' })
      );
    });
  });

  describe('/partnership (DELETE)', () => {
    it('/partnership (DELETE) 200', () => {
      return (
        request(app.getHttpServer())
          .delete('/partnership/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect({})
      );
    });

    it('/partnership (DELETE) 400 Not Found or Id Is empty', () => {
      return (
        request(app.getHttpServer())
          .delete('/partnership/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Partnership: 'Not found' }) &&
        request(app.getHttpServer())
          .delete('/partnership')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect({
            statusCode: 404,
            error: 'Not Found',
            message: 'Cannot DELETE /partnership'
          })
      );
    });
  });
});
