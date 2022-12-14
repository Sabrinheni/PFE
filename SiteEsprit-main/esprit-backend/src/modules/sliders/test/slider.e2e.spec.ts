import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { SliderEntity } from './../entities/slider.entity';
import { SliderService } from './../slider.service';
import { SliderController } from './../slider.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ObjectID } from 'mongodb';

describe('SliderController (e2e)', () => {
  let app: INestApplication;
  const mockSlider = new SliderEntity();
  mockSlider._id = new ObjectID('5e2f63d67c06a754d05da4b6');
  mockSlider.title = 'mockingTitle';
  mockSlider.status = true;
  mockSlider.titleDescription = 'mockingTitleDescription';
  mockSlider.btnName = 'mockingBtnName';

  const notFoundException = {
    statusCode: 400,
    error: 'Bad Request',
    message: 'Invalid ID!'
  };
  const idRequiredException = {
    statusCode: 404,
    error: 'Not Found',
    message: 'Cannot GET /slider/'
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // imports: [AppModule],
      controllers: [SliderController],
      providers: [
        {
          provide: SliderService,
          useFactory: () => ({
            findAll: jest.fn(() => ['new SliderEntity()']),
            findById: jest.fn(id => {
              if (!id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return mockSlider;
              } else {
                throw new HttpException({ Slider: 'Not found' }, 400);
              }
            }),
            create: jest.fn(sliderData => {
              if (!sliderData) {
                throw new HttpException({ Slider: 'Not found' }, 400);
              }
              return mockSlider;
            }),
            update: jest.fn((_id, sliderData) => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                sliderData._id = mockSlider._id;
                return sliderData;
              } else {
                throw new HttpException({ Slider: 'Not found' }, 400);
              }
            }),
            delete: jest.fn(_id => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return {};
              } else {
                throw new HttpException({ Slider: 'Not found' }, 400);
              }
            })
          })
        }
      ]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/sliders (GET) GET ALL', () => {
    it('/sliders', () => {
      return request(app.getHttpServer())
        .get('/sliders')
        .expect(200)
        .expect(['new SliderEntity()']);
    });
  });

  describe('/slider/:id (GET)', () => {
    it('/slider/:id (GET) 200', () => {
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        status: true,
        titleDescription: 'mockingTitleDescription',
        btnName: 'mockingBtnName'
      };
      return (
        request(app.getHttpServer())
          .get('/slider/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/slider/:id (GET) NO ID 400', () => {
      return (
        request(app.getHttpServer())
          .get('/slider/')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect(idRequiredException)
      );
    });

    it('/slider/:id (GET) Invalid 400', () => {
      return (
        request(app.getHttpServer())
          .get('/slider/5e2f63d67c06a7')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect(notFoundException)
      );
    });
  });

  describe('/slider (POST)', () => {
    it('/slider (POST) 201', () => {
      const toSend = {
        title: 'mockingTitle',
        status: true,
        titleDescription: 'mockingTitleDescription',
        btnName: 'mockingBtnName'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        status: true,
        titleDescription: 'mockingTitleDescription',
        btnName: 'mockingBtnName'
      };
      return (
        request(app.getHttpServer())
          .post('/slider')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(201)
          .expect(expected)
      );
    });

    it('/slider (POST) 400 Invalid DTO or empty body', () => {
      const toSend = {
        title: 'mockingTitle'
        // status: true,
        // titleDescription: 'mockingTitleDescription',
        // btnName: 'mockingBtnName',
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        status: true,
        titleDescription: 'mockingTitleDescription',
        btnName: 'mockingBtnName'
      };
      return (
        request(app.getHttpServer())
          .post('/slider')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({
            message: 'Input data validation failed',
            errors: {
              // titleisNotEmpty: 'title should not be empty',
              titleDescriptionisNotEmpty: 'titleDescription should not be empty',
              btnNameisNotEmpty: 'btnName should not be empty'
            }
          }) &&
        request(app.getHttpServer())
          .post('/slider')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({
            message: 'Input data validation failed',
            errors: {
              titleisNotEmpty: 'title should not be empty',
              titleDescriptionisNotEmpty: 'titleDescription should not be empty',
              btnNameisNotEmpty: 'btnName should not be empty'
            }
          })
      );
    });
  });

  describe('/slider (PUT)', () => {
    it('/slider (PUT) 200 OK', () => {
      const toSend = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitleUp',
        status: true,
        titleDescription: 'mockingTitleDescription',
        btnName: 'mockingBtnName'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitleUp',
        status: true,
        titleDescription: 'mockingTitleDescription',
        btnName: 'mockingBtnName'
      };
      return (
        request(app.getHttpServer())
          .put('/slider')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/slider (PUT) 400 Invalid DTO or empty body', () => {
      const toSend = {
        title: 'mockingTitle',
        status: true,
        titleDescription: 'mockingTitleDescription',
        btnName: 'mockingBtnName'
      };
      return (
        request(app.getHttpServer())
          .put('/slider')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Slider: 'Not found' }) &&
        request(app.getHttpServer())
          .put('/slider')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Slider: 'Not found' })
      );
    });
  });

  describe('/slider (DELETE)', () => {
    it('/slider (DELETE) 200', () => {
      return (
        request(app.getHttpServer())
          .delete('/slider/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect({})
      );
    });

    it('/slider (DELETE) 400 Not Found or Id Is empty', () => {
      return (
        request(app.getHttpServer())
          .delete('/slider/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Slider: 'Not found' }) &&
        request(app.getHttpServer())
          .delete('/slider')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect({
            statusCode: 404,
            error: 'Not Found',
            message: 'Cannot DELETE /slider'
          })
      );
    });
  });
});
