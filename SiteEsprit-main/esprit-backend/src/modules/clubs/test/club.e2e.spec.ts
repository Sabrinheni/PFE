import { UserService } from './../../users/user.service';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { ClubEntity } from './../entities/club.entity';
import { ClubService } from './../club.service';
import { ClubController } from './../club.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ObjectID } from 'mongodb';
import { clubTypes, sportTypes } from '../entities/club.enum';
// import { findByField } from './../../../shared/findByField.utils';

const mockClub = new ClubEntity();
mockClub._id = new ObjectID('5e2f63d67c06a754d05da4b6');
mockClub.title = 'mockingTitle';
mockClub.description = 'mockingTitleDescription';
mockClub.type = clubTypes.other;
mockClub.sport = sportTypes.individual;

describe('ClubController (e2e)', () => {
  jest.mock('./../../../shared/findByField.utils', () => {
    const original = require.requireActual('./../../../shared/findByField.utils');
    original.default = jest.fn(notFound => {
      if (notFound) {
        throw new HttpException({ Club: 'Not found' }, 400);
      }
      return mockClub;
    });
    return original;
  });
  const findByField = require('./../../../shared/findByField.utils');

  jest.mock('./../../../shared/isFieldUnique.utils', () => {
    const original = require.requireActual('./../../../shared/isFieldUnique.utils');
    original.default = jest.fn(notFound => {
      if (notFound) {
        return false;
      }
      return true;
    });
    return original;
  });
  const isFieldUnique = require('./../../../shared/isFieldUnique.utils');

  let app: INestApplication;

  const notFoundException = { message: 'Check passed ID', errors: { Club: 'Not found' } };
  const idRequiredException = {
    statusCode: 404,
    error: 'Not Found',
    message: 'Cannot GET /club/'
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // imports: [AppModule],
      controllers: [ClubController],
      providers: [
        {
          provide: 'ClubEntityRepository',
          useFactory: () => ({})
        },
        {
          provide: ClubService,
          useFactory: () => ({
            findAll: jest.fn(() => ['new ClubEntity()']),
            findById: jest.fn(id => {
              if (!id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (id === '5e2f63d67c06a754d05da4b6') {
                return mockClub;
              } else {
                throw new HttpException({ Club: 'Not found' }, 400);
              }
            }),
            create: jest.fn(clubData => {
              // console.log(clubData);
              if (!clubData) {
                throw new HttpException({ Club: 'Not found' }, 400);
              }
              return mockClub;
            }),
            update: jest.fn((_id, clubData) => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id._id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                clubData._id = mockClub._id;
                return clubData;
              } else {
                throw new HttpException({ Club: 'Not found' }, 400);
              }
            }),
            delete: jest.fn(_id => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return {};
              } else {
                throw new HttpException({ Club: 'Not found' }, 400);
              }
            })
          })
        },
        {
          provide: UserService,
          useFactory: () => ({
            populateUsers: jest.fn(entity => {
              return entity;
            })
          })
        }
      ]
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/clubs (GET) GET ALL', () => {
    it('/clubs', () => {
      return request(app.getHttpServer())
        .get('/clubs')
        .expect(200)
        .expect(['new ClubEntity()']);
    });
  });

  describe('/club/:id (GET)', () => {
    it('/club/:id (GET) 200', () => {
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: clubTypes.other,
        sport: sportTypes.individual,
        description: 'mockingTitleDescription'
      };
      const spying = jest.spyOn(findByField, 'findByField').mockReturnValueOnce(mockClub);
      return (
        request(app.getHttpServer())
          .get('/club/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/club/:id (GET) NO ID 400', () => {
      return (
        request(app.getHttpServer())
          .get('/club/')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect(idRequiredException)
      );
    });

    it('/club/:id (GET) Invalid 400', () => {
      const spying = jest.spyOn(findByField, 'findByField').mockReturnValueOnce(mockClub);
      return (
        request(app.getHttpServer())
          .get('/club/5e2f63d67c06a7')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect(notFoundException)
      );
    });
  });

  describe('/club (POST)', () => {
    it('/club (POST) 201', () => {
      const toSend = {
        title: 'mockingTitle',
        type: clubTypes.other,
        sport: sportTypes.individual,
        description: 'mockingTitleDescription'
      };

      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: clubTypes.other,
        sport: sportTypes.individual,
        description: 'mockingTitleDescription'
      };
      const spying = jest.spyOn(findByField, 'findByField').mockReturnValueOnce(mockClub);
      const spyingField = jest.spyOn(isFieldUnique, 'isFieldUnique').mockReturnValueOnce(true);
      return (
        request(app.getHttpServer())
          .post('/club')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(201)
          .expect(expected)
      );
    });
  });

  describe('/club (PUT)', () => {
    it('/club (PUT) 200 OK', () => {
      const toSend = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: clubTypes.other,
        sport: sportTypes.individual,
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: clubTypes.other,
        sport: sportTypes.individual,
        description: 'mockingTitleDescription'
      };
      const spying = jest.spyOn(findByField, 'findByField').mockReturnValueOnce(mockClub);
      const spyingField = jest.spyOn(isFieldUnique, 'isFieldUnique').mockReturnValueOnce(true);
      return (
        request(app.getHttpServer())
          .put('/club/5e2f63d67c06a754d05da4b6')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });
  });

  describe('/club (DELETE)', () => {
    it('/club (DELETE) 200', () => {
      const spying = jest.spyOn(findByField, 'findByField').mockReturnValueOnce(mockClub);
      return (
        request(app.getHttpServer())
          .delete('/club/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect({})
      );
    });

    it('/club (DELETE) 400 Not Found or Id Is empty', () => {
      return (
        request(app.getHttpServer())
          .delete('/club/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Club: 'Not found' }) &&
        request(app.getHttpServer())
          .delete('/club')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect({
            statusCode: 404,
            error: 'Not Found',
            message: 'Cannot DELETE /club'
          })
      );
    });
  });
});
