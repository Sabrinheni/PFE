import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SliderEntity } from './../entities/slider.entity';
import { SliderService } from './../slider.service';
import { Test } from '@nestjs/testing';
import { REQUEST } from '@nestjs/core';
import { ObjectID } from 'mongodb';

const mockSliderRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  delete: jest.fn()
});

const mockRequest = {
  user: {
    token: 'mocktoken',
    username: 'mock',
    email: 'mock@mock.mock'
  }
};
const mockDate = new Date();

describe('Slider Service', () => {
  let sliderService;
  let sliderRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        SliderService,
        {
          provide: getRepositoryToken(SliderEntity),
          useFactory: mockSliderRepository
        },
        {
          provide: REQUEST,
          useValue: mockRequest
        }
      ]
    }).compile();

    sliderService = await module.resolve<SliderService>(SliderService);
    sliderRepository = await module.get(getRepositoryToken(SliderEntity));
  });

  describe('findAll', () => {
    it('gets all sliders', async () => {
      sliderRepository.find.mockResolvedValue([new SliderEntity()]);
      expect(sliderRepository.find).not.toHaveBeenCalled();
      const result = await sliderService.findAll();
      expect(sliderRepository.find).toHaveBeenCalled();
      expect(result).toEqual([new SliderEntity()]);
    });
  });

  describe('findSliderByID', () => {
    it('calls findById and retreive the slider', async () => {
      const _id = 'myid';
      const mockSlider = new SliderEntity();
      sliderRepository.findOne.mockResolvedValue(mockSlider);

      const result = await sliderService.findById('myid');
      expect(result).toEqual(mockSlider);

      expect(sliderRepository.findOne).toHaveBeenCalledWith({ _id });
    });

    it('calls findById and throws an error is slider not found or id is empty', async () => {
      sliderRepository.findOne.mockResolvedValue(null);
      expect(sliderService.findById('myid')).rejects.toThrow(HttpException);
      expect(sliderService.findById()).rejects.toThrow(HttpException);
    });
  });

  describe('create Slider', () => {
    it('calls create slider and returns saved entity', async () => {
      expect(sliderRepository.save).not.toHaveBeenCalled();

      const mockSlider = {
        btnName: 'undefined',
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        titleDescription: 'undefined',
        url: 'undefined'
      };
      const resultValues = {
        btnName: 'undefined',
        createdAt: jest.fn(() => mockDate),
        date: jest.fn(() => mockDate),
        description: 'undefined',
        image: 'undefined',
        lastUpdateAt: jest.fn(() => mockDate),
        status: 'undefined',
        title: 'undefined',
        titleDescription: 'undefined',
        url: 'undefined',
        userCreated: {
          email: 'mock@mock.mock',
          username: 'mock'
        },
        userUpdated: {
          email: 'mock@mock.mock',
          username: 'mock'
        }
      };
      const mockSliderResult = new SliderEntity();
      Object.assign(mockSliderResult, resultValues);
      sliderRepository.save.mockResolvedValue(mockSliderResult);

      const result = await sliderService.create(mockSlider);
      expect(result).toEqual(mockSliderResult);
    });
  });

  describe('Delete Slider', () => {
    it('Call delete repository to delete slider and is successful', async () => {
      const mockEntity = new SliderEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;
      sliderRepository.delete.mockResolvedValue({});
      sliderRepository.findOne.mockResolvedValue(mockEntity);

      expect(sliderRepository.delete).not.toHaveBeenCalled();
      expect(sliderRepository.findOne).not.toHaveBeenCalled();
      await sliderService.delete(_id);
      expect(sliderRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(sliderRepository.delete).toHaveBeenCalledWith({ _id });
    });

    it('Calls delete repository to delete slider and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(sliderService.delete(_id)).rejects.toThrow(HttpException);
    });
  });

  describe('Update Slider', () => {
    it('Call update repository to update slider and is successful', async () => {
      const mockEntity = new SliderEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;

      const mockEntityDto = {
        btnName: 'undefined',
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        titleDescription: 'undefined',
        url: 'undefined',
        _id: _id
      };

      sliderRepository.findOne.mockResolvedValue(mockEntity);
      sliderRepository.save.mockResolvedValue(mockEntity);

      expect(sliderRepository.findOne).not.toHaveBeenCalled();
      expect(sliderRepository.save).not.toHaveBeenCalled();
      const toUpdate = Object.assign(mockEntity, mockEntityDto);
      const result = await sliderService.update(_id, mockEntityDto);
      expect(sliderRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(sliderRepository.save).toHaveBeenCalledWith(toUpdate);
    });

    it('Calls update repository to update slider and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(sliderService.update(_id)).rejects.toThrow(HttpException);
    });
  });
});
