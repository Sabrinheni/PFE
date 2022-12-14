import { UserService } from './../../users/user.service';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { EventEntity } from './../entities/event.entity';
import { EventService } from './../event.service';
import { EventController } from './../event.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ObjectID } from 'mongodb';
import { eventTypes } from '../entities/event.enum';
// import { findByField } from './../../../shared/findByField.utils';

const mockEvent = new EventEntity();
mockEvent._id = new ObjectID('5e2f63d67c06a754d05da4b6');
mockEvent.title = 'mockingTitle';
mockEvent.description = 'mockingTitleDescription';
mockEvent.type = eventTypes.actualite;

describe('EventController (e2e)', () => {
  jest.mock('./../../../shared/findByField.utils', () => {
    const original = require.requireActual('./../../../shared/findByField.utils');
    original.default = jest.fn(notFound => {
      if (notFound) {
        throw new HttpException({ Event: 'Not found' }, 400);
      }
      return mockEvent;
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

  const notFoundException = { message: 'Check passed ID', errors: { Event: 'Not found' } };
  const idRequiredException = {
    statusCode: 404,
    error: 'Not Found',
    message: 'Cannot GET /event/'
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // imports: [AppModule],
      controllers: [EventController],
      providers: [
        {
          provide: 'EventEntityRepository',
          useFactory: () => ({})
        },
        {
          provide: EventService,
          useFactory: () => ({
            findAll: jest.fn(() => ['new EventEntity()']),
            findById: jest.fn(id => {
              if (!id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (id === '5e2f63d67c06a754d05da4b6') {
                return mockEvent;
              } else {
                throw new HttpException({ Event: 'Not found' }, 400);
              }
            }),
            create: jest.fn(eventData => {
              // console.log(eventData);
              if (!eventData) {
                throw new HttpException({ Event: 'Not found' }, 400);
              }
              return mockEvent;
            }),
            update: jest.fn((_id, eventData) => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id._id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                eventData._id = mockEvent._id;
                return eventData;
              } else {
                throw new HttpException({ Event: 'Not found' }, 400);
              }
            }),
            delete: jest.fn(_id => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return {};
              } else {
                throw new HttpException({ Event: 'Not found' }, 400);
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

  describe('/events (GET) GET ALL', () => {
    it('/events', () => {
      return request(app.getHttpServer())
        .get('/events')
        .expect(200)
        .expect(['new EventEntity()']);
    });
  });

  describe('/event/:id (GET)', () => {
    it('/event/:id (GET) 200', () => {
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: eventTypes.actualite,
        description: 'mockingTitleDescription',
        status: true,
        accepted: false
      };
      const spying = jest.spyOn(findByField, 'findByField').mockReturnValueOnce(mockEvent);
      return (
        request(app.getHttpServer())
          .get('/event/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/event/:id (GET) NO ID 400', () => {
      return (
        request(app.getHttpServer())
          .get('/event/')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect(idRequiredException)
      );
    });

    it('/event/:id (GET) Invalid 400', () => {
      const spying = jest.spyOn(findByField, 'findByField').mockReturnValueOnce(mockEvent);
      return (
        request(app.getHttpServer())
          .get('/event/5e2f63d67c06a7')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect(notFoundException)
      );
    });
  });

  describe('/event (POST)', () => {
    it('/event (POST) 201', () => {
      const toSend = {
        title: 'mockingTitle',
        type: eventTypes.actualite,
        description: 'mockingTitleDescription'
      };

      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: eventTypes.actualite,
        description: 'mockingTitleDescription'
      };
      const spying = jest.spyOn(findByField, 'findByField').mockReturnValueOnce(mockEvent);
      const spyingField = jest.spyOn(isFieldUnique, 'isFieldUnique').mockReturnValueOnce(true);
      return (
        request(app.getHttpServer())
          .post('/event')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(201)
          .expect(expected)
      );
    });
  });

  describe('/event (PUT)', () => {
    it('/event (PUT) 200 OK', () => {
      const toSend = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: eventTypes.actualite,
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: eventTypes.actualite,
        description: 'mockingTitleDescription'
      };
      const spying = jest.spyOn(findByField, 'findByField').mockReturnValueOnce(mockEvent);
      const spyingField = jest.spyOn(isFieldUnique, 'isFieldUnique').mockReturnValueOnce(true);
      return (
        request(app.getHttpServer())
          .put('/event/5e2f63d67c06a754d05da4b6')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });
  });

  describe('/event (DELETE)', () => {
    it('/event (DELETE) 200', () => {
      const spying = jest.spyOn(findByField, 'findByField').mockReturnValueOnce(mockEvent);
      return (
        request(app.getHttpServer())
          .delete('/event/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect({})
      );
    });

    it('/event (DELETE) 400 Not Found or Id Is empty', () => {
      return (
        request(app.getHttpServer())
          .delete('/event/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Event: 'Not found' }) &&
        request(app.getHttpServer())
          .delete('/event')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect({
            statusCode: 404,
            error: 'Not Found',
            message: 'Cannot DELETE /event'
          })
      );
    });
  });
});
