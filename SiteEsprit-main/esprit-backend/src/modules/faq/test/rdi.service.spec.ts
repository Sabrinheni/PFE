import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RdiEntity } from './../entities/rdi.entity';
import { RdiService } from './../rdi.service';
import { Test } from '@nestjs/testing';
import { REQUEST } from '@nestjs/core';
import { ObjectID } from 'mongodb';

const mockRdiRepository = () => ({
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

describe('Rdi Service', () => {
  let rdiService;
  let rdiRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        RdiService,
        {
          provide: getRepositoryToken(RdiEntity),
          useFactory: mockRdiRepository
        },
        {
          provide: REQUEST,
          useValue: mockRequest
        }
      ]
    }).compile();

    rdiService = await module.resolve<RdiService>(RdiService);
    rdiRepository = await module.get(getRepositoryToken(RdiEntity));
  });

  describe('findAll', () => {
    it('gets all rdis', async () => {
      rdiRepository.find.mockResolvedValue([new RdiEntity()]);
      expect(rdiRepository.find).not.toHaveBeenCalled();
      const result = await rdiService.findAll();
      expect(rdiRepository.find).toHaveBeenCalled();
      expect(result).toEqual([new RdiEntity()]);
    });
  });

  describe('findRdiByID', () => {
    it('calls findById and retreive the rdi', async () => {
      const _id = 'myid';
      const mockRdi = new RdiEntity();
      rdiRepository.findOne.mockResolvedValue(mockRdi);

      const result = await rdiService.findById('myid');
      expect(result).toEqual(mockRdi);

      expect(rdiRepository.findOne).toHaveBeenCalledWith({ _id });
    });

    it('calls findById and throws an error is rdi not found or id is empty', async () => {
      rdiRepository.findOne.mockResolvedValue(null);
      expect(rdiService.findById('myid')).rejects.toThrow(HttpException);
      expect(rdiService.findById()).rejects.toThrow(HttpException);
    });
  });

  describe('create Rdi', () => {
    it('calls create rdi and returns saved entity', async () => {
      expect(rdiRepository.save).not.toHaveBeenCalled();

      const mockRdi = {
        members: ['one', 'two', 'ect'],
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        url: 'undefined'
      };
      const resultValues = {
        members: ['one', 'two', 'ect'],
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
      const mockRdiResult = new RdiEntity();
      Object.assign(mockRdiResult, resultValues);
      rdiRepository.save.mockResolvedValue(mockRdiResult);

      const result = await rdiService.create(mockRdi);
      expect(result).toEqual(mockRdiResult);
    });
  });

  describe('Delete Rdi', () => {
    it('Call delete repository to delete rdi and is successful', async () => {
      const mockEntity = new RdiEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;
      rdiRepository.delete.mockResolvedValue({});
      rdiRepository.findOne.mockResolvedValue(mockEntity);

      expect(rdiRepository.delete).not.toHaveBeenCalled();
      expect(rdiRepository.findOne).not.toHaveBeenCalled();
      await rdiService.delete(_id);
      expect(rdiRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(rdiRepository.delete).toHaveBeenCalledWith({ _id });
    });

    it('Calls delete repository to delete rdi and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(rdiService.delete(_id)).rejects.toThrow(HttpException);
    });
  });

  describe('Update Rdi', () => {
    it('Call update repository to update rdi and is successful', async () => {
      const mockEntity = new RdiEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;

      const mockEntityDto = {
        members: ['one', 'two', 'ect'],
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        url: 'undefined',
        _id: _id
      };

      rdiRepository.findOne.mockResolvedValue(mockEntity);
      rdiRepository.save.mockResolvedValue(mockEntity);

      expect(rdiRepository.findOne).not.toHaveBeenCalled();
      expect(rdiRepository.save).not.toHaveBeenCalled();
      const toUpdate = Object.assign(mockEntity, mockEntityDto);
      const result = await rdiService.update(_id, mockEntityDto);
      expect(rdiRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(rdiRepository.save).toHaveBeenCalledWith(toUpdate);
    });

    it('Calls update repository to update rdi and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(rdiService.update(_id)).rejects.toThrow(HttpException);
    });
  });
});
