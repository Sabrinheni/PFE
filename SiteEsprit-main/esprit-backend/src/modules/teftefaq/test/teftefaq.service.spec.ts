import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PressEntity } from '../entities/press.entity';
import { PressService } from '../press.service';
import { Test } from '@nestjs/testing';
import { REQUEST } from '@nestjs/core';
import { ObjectID } from 'mongodb';
import { pressTypes } from '../entities/press.enum';

const mockPressRepository = () => ({
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

describe('Press Service', () => {
  let pressService;
  let pressRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        PressService,
        {
          provide: getRepositoryToken(PressEntity),
          useFactory: mockPressRepository
        },
        {
          provide: REQUEST,
          useValue: mockRequest
        }
      ]
    }).compile();

    pressService = await module.resolve<PressService>(PressService);
    pressRepository = await module.get(getRepositoryToken(PressEntity));
  });

  describe('findAll', () => {
    it('gets all presss', async () => {
      pressRepository.find.mockResolvedValue([new PressEntity()]);
      expect(pressRepository.find).not.toHaveBeenCalled();
      const result = await pressService.findAll();
      expect(pressRepository.find).toHaveBeenCalled();
      expect(result).toEqual([new PressEntity()]);
    });
  });

  describe('findPressByID', () => {
    it('calls findById and retreive the press', async () => {
      const _id = 'myid';
      const mockPress = new PressEntity();
      pressRepository.findOne.mockResolvedValue(mockPress);

      const result = await pressService.findById('myid');
      expect(result).toEqual(mockPress);

      expect(pressRepository.findOne).toHaveBeenCalledWith({ _id });
    });

    it('calls findById and throws an error is press not found or id is empty', async () => {
      pressRepository.findOne.mockResolvedValue(null);
      expect(pressService.findById('myid')).rejects.toThrow(HttpException);
      expect(pressService.findById()).rejects.toThrow(HttpException);
    });
  });

  describe('create Press', () => {
    it('calls create press and returns saved entity', async () => {
      expect(pressRepository.save).not.toHaveBeenCalled();

      const mockPress = {
        type: pressTypes.article,
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        url: 'undefined'
      };
      const resultValues = {
        type: pressTypes.article,
        createdAt: jest.fn(() => mockDate),
        date: jest.fn(() => mockDate),
        description: 'undefined',
        image: 'undefined',
        lastUpdateAt: jest.fn(() => mockDate),
        status: 'undefined',
        title: 'undefined',
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
      const mockPressResult = new PressEntity();
      Object.assign(mockPressResult, resultValues);
      pressRepository.save.mockResolvedValue(mockPressResult);

      const result = await pressService.create(mockPress);
      expect(result).toEqual(mockPressResult);
    });
  });

  describe('Delete Press', () => {
    it('Call delete repository to delete press and is successful', async () => {
      const mockEntity = new PressEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;
      pressRepository.delete.mockResolvedValue({});
      pressRepository.findOne.mockResolvedValue(mockEntity);

      expect(pressRepository.delete).not.toHaveBeenCalled();
      expect(pressRepository.findOne).not.toHaveBeenCalled();
      await pressService.delete(_id);
      expect(pressRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(pressRepository.delete).toHaveBeenCalledWith({ _id });
    });

    it('Calls delete repository to delete press and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(pressService.delete(_id)).rejects.toThrow(HttpException);
    });
  });

  describe('Update Press', () => {
    it('Call update repository to update press and is successful', async () => {
      const mockEntity = new PressEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;

      const mockEntityDto = {
        type: pressTypes.article,
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        url: 'undefined',
        _id: _id
      };

      pressRepository.findOne.mockResolvedValue(mockEntity);
      pressRepository.save.mockResolvedValue(mockEntity);

      expect(pressRepository.findOne).not.toHaveBeenCalled();
      expect(pressRepository.save).not.toHaveBeenCalled();
      const toUpdate = Object.assign(mockEntity, mockEntityDto);
      const result = await pressService.update(_id, mockEntityDto);
      expect(pressRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(pressRepository.save).toHaveBeenCalledWith(toUpdate);
    });

    it('Calls update repository to update press and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(pressService.update(_id)).rejects.toThrow(HttpException);
    });
  });
});
