import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { EspritIngenieurEntity } from '../entities/EspritIngenieur.entity';
import { EspritIngenieurService } from '../EspritIngenieur.service';
import { EspritIngenieurController } from '../EspritIngenieur.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ObjectID } from 'mongodb';
import { EspritIngenieurTypes } from '../entities/EspritIngenieur.enum';

describe('EspritIngenieurController (e2e)', () => {
  let app: INestApplication;
  const mockEspritIngenieur = new EspritIngenieurEntity();
  mockEspritIngenieur._id = new ObjectID('5e2f63d67c06a754d05da4b6');
  mockEspritIngenieur.title = 'mockingTitle';
  mockEspritIngenieur.description = 'mockingTitleDescription';
  mockEspritIngenieur.type = EspritIngenieurTypes.admission;

  const notFoundException = {
    statusCode: 400,
    error: 'Bad Request',
    message: 'Invalid ID!'
  };
  const idRequiredException = {
    statusCode: 404,
    error: 'Not Found',
    message: 'Cannot GET /EspritIngenieur/'
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // imports: [AppModule],
      controllers: [EspritIngenieurController],
      providers: [
        {
          provide: EspritIngenieurService,
          useFactory: () => ({
            findAll: jest.fn(() => ['new EspritIngenieurEntity()']),
            findById: jest.fn(id => {
              if (!id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return mockEspritIngenieur;
              } else {
                throw new HttpException({ EspritIngenieur: 'Not found' }, 400);
              }
            }),
            create: jest.fn(EspritIngenieurData => {
              if (!EspritIngenieurData) {
                throw new HttpException({ EspritIngenieur: 'Not found' }, 400);
              }
              return mockEspritIngenieur;
            }),
            update: jest.fn((_id, EspritIngenieurData) => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                EspritIngenieurData._id = mockEspritIngenieur._id;
                return EspritIngenieurData;
              } else {
                throw new HttpException({ EspritIngenieur: 'Not found' }, 400);
              }
            }),
            delete: jest.fn(_id => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return {};
              } else {
                throw new HttpException({ EspritIngenieur: 'Not found' }, 400);
              }
            })
          })
        }
      ]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/EspritIngenieurs (GET) GET ALL', () => {
    it('/EspritIngenieurs', () => {
      return request(app.getHttpServer())
        .get('/EspritIngenieurs')
        .expect(200)
        .expect(['new EspritIngenieurEntity()']);
    });
  });

  describe('/EspritIngenieur/:id (GET)', () => {
    it('/EspritIngenieur/:id (GET) 200', () => {
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: EspritIngenieurTypes.admission,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .get('/EspritIngenieur/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/EspritIngenieur/:id (GET) NO ID 400', () => {
      return (
        request(app.getHttpServer())
          .get('/EspritIngenieur/')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect(idRequiredException)
      );
    });

    it('/EspritIngenieur/:id (GET) Invalid 400', () => {
      return (
        request(app.getHttpServer())
          .get('/EspritIngenieur/5e2f63d67c06a7')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect(notFoundException)
      );
    });
  });

  describe('/EspritIngenieur (POST)', () => {
    it('/EspritIngenieur (POST) 201', () => {
      const toSend = {
        title: 'mockingTitle',
        type: EspritIngenieurTypes.admission,
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: EspritIngenieurTypes.admission,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .post('/EspritIngenieur')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(201)
          .expect(expected)
      );
    });

    it('/EspritIngenieur (POST) 400 Invalid DTO or empty body', () => {
      const toSend = {
        title: 'mockingTitle',
        type: EspritIngenieurTypes.admission
        // titleDescription: 'mockingTitleDescription',
        // btnName: 'mockingBtnName',
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: EspritIngenieurTypes.admission,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .post('/EspritIngenieur')
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

  describe('/EspritIngenieur (PUT)', () => {
    it('/EspritIngenieur (PUT) 200 OK', () => {
      const toSend = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: EspritIngenieurTypes.admission,
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: EspritIngenieurTypes.admission,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .put('/EspritIngenieur')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/EspritIngenieur (PUT) 400 Invalid DTO or empty body', () => {
      const toSend = {
        // title: 'mockingTitle',
        // type: EspritIngenieurTypes.admission,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .put('/EspritIngenieur')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ EspritIngenieur: 'Not found' }) &&
        request(app.getHttpServer())
          .put('/EspritIngenieur')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ EspritIngenieur: 'Not found' })
      );
    });
  });

  describe('/EspritIngenieur (DELETE)', () => {
    it('/EspritIngenieur (DELETE) 200', () => {
      return (
        request(app.getHttpServer())
          .delete('/EspritIngenieur/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect({})
      );
    });

    it('/EspritIngenieur (DELETE) 400 Not Found or Id Is empty', () => {
      return (
        request(app.getHttpServer())
          .delete('/EspritIngenieur/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ EspritIngenieur: 'Not found' }) &&
        request(app.getHttpServer())
          .delete('/EspritIngenieur')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect({
            statusCode: 404,
            error: 'Not Found',
            message: 'Cannot DELETE /EspritIngenieur'
          })
      );
    });
  });
});
