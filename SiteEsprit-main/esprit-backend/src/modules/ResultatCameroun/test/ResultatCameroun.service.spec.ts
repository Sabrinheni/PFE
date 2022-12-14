import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ResultatCamerounEntity } from '../entities/ResultatCameroun.entity';
import { ResultatCamerounService } from '../ResultatCameroun.service';
import { Test } from '@nestjs/testing';
import { REQUEST } from '@nestjs/core';
import { ObjectID } from 'mongodb';
import { ResultatCamerounTypes } from '../entities/ResultatCameroun.enum';

const mockResultatCamerounRepository = () => ({
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

describe('ResultatCameroun Service', () => {
  let ResultatCamerounService;
  let ResultatCamerounRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ResultatCamerounService,
        {
          provide: getRepositoryToken(ResultatCamerounEntity),
          useFactory: mockResultatCamerounRepository
        },
        {
          provide: REQUEST,
          useValue: mockRequest
        }
      ]
    }).compile();

    ResultatCamerounService = await module.resolve<ResultatCamerounService>(ResultatCamerounService);
    ResultatCamerounRepository = await module.get(getRepositoryToken(ResultatCamerounEntity));
  });

  describe('findAll', () => {
    it('gets all ResultatCamerouns', async () => {
      ResultatCamerounRepository.find.mockResolvedValue([new ResultatCamerounEntity()]);
      expect(ResultatCamerounRepository.find).not.toHaveBeenCalled();
      const result = await ResultatCamerounService.findAll();
      expect(ResultatCamerounRepository.find).toHaveBeenCalled();
      expect(result).toEqual([new ResultatCamerounEntity()]);
    });
  });

  describe('findResultatCamerounByID', () => {
    it('calls findById and retreive the ResultatCameroun', async () => {
      const _id = 'myid';
      const mockResultatCameroun = new ResultatCamerounEntity();
      ResultatCamerounRepository.findOne.mockResolvedValue(mockResultatCameroun);

      const result = await ResultatCamerounService.findById('myid');
      expect(result).toEqual(mockResultatCameroun);

      expect(ResultatCamerounRepository.findOne).toHaveBeenCalledWith({ _id });
    });

    it('calls findById and throws an error is ResultatCameroun not found or id is empty', async () => {
      ResultatCamerounRepository.findOne.mockResolvedValue(null);
      expect(ResultatCamerounService.findById('myid')).rejects.toThrow(HttpException);
      expect(ResultatCamerounService.findById()).rejects.toThrow(HttpException);
    });
  });

  describe('create ResultatCameroun', () => {
    it('calls create ResultatCameroun and returns saved entity', async () => {
      expect(ResultatCamerounRepository.save).not.toHaveBeenCalled();

      const mockResultatCameroun = {
        type: ResultatCamerounTypes.Techsession1,
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        url: 'undefined'
      };
      const resultValues = {
        type: ResultatCamerounTypes.Techsession1,
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
      const mockResultatCamerounResult = new ResultatCamerounEntity();
      Object.assign(mockResultatCamerounResult, resultValues);
      ResultatCamerounRepository.save.mockResolvedValue(mockResultatCamerounResult);

      const result = await ResultatCamerounService.create(mockResultatCameroun);
      expect(result).toEqual(mockResultatCamerounResult);
    });
  });

  describe('Delete ResultatCameroun', () => {
    it('Call delete repository to delete ResultatCameroun and is successful', async () => {
      const mockEntity = new ResultatCamerounEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;
      ResultatCamerounRepository.delete.mockResolvedValue({});
      ResultatCamerounRepository.findOne.mockResolvedValue(mockEntity);

      expect(ResultatCamerounRepository.delete).not.toHaveBeenCalled();
      expect(ResultatCamerounRepository.findOne).not.toHaveBeenCalled();
      await ResultatCamerounService.delete(_id);
      expect(ResultatCamerounRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(ResultatCamerounRepository.delete).toHaveBeenCalledWith({ _id });
    });

    it('Calls delete repository to delete ResultatCameroun and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(ResultatCamerounService.delete(_id)).rejects.toThrow(HttpException);
    });
  });

  describe('Update ResultatCameroun', () => {
    it('Call update repository to update ResultatCameroun and is successful', async () => {
      const mockEntity = new ResultatCamerounEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;

      const mockEntityDto = {
        type: ResultatCamerounTypes.Techsession1,
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        url: 'undefined',
        _id: _id
      };

      ResultatCamerounRepository.findOne.mockResolvedValue(mockEntity);
      ResultatCamerounRepository.save.mockResolvedValue(mockEntity);

      expect(ResultatCamerounRepository.findOne).not.toHaveBeenCalled();
      expect(ResultatCamerounRepository.save).not.toHaveBeenCalled();
      const toUpdate = Object.assign(mockEntity, mockEntityDto);
      const result = await ResultatCamerounService.update(_id, mockEntityDto);
      expect(ResultatCamerounRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(ResultatCamerounRepository.save).toHaveBeenCalledWith(toUpdate);
    });

    it('Calls update repository to update ResultatCameroun and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(ResultatCamerounService.update(_id)).rejects.toThrow(HttpException);
    });
  });
});
