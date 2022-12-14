import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PartnershipEntity } from './../entities/partnership.entity';
import { PartnershipService } from './../partnership.service';
import { Test } from '@nestjs/testing';
import { REQUEST } from '@nestjs/core';
import { ObjectID } from 'mongodb';
import { partnershipTypes } from '../entities/partnership.enum';

const mockPartnershipRepository = () => ({
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

describe('Partnership Service', () => {
  let partnershipService;
  let partnershipRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        PartnershipService,
        {
          provide: getRepositoryToken(PartnershipEntity),
          useFactory: mockPartnershipRepository
        },
        {
          provide: REQUEST,
          useValue: mockRequest
        }
      ]
    }).compile();

    partnershipService = await module.resolve<PartnershipService>(PartnershipService);
    partnershipRepository = await module.get(getRepositoryToken(PartnershipEntity));
  });

  describe('findAll', () => {
    it('gets all partnerships', async () => {
      partnershipRepository.find.mockResolvedValue([new PartnershipEntity()]);
      expect(partnershipRepository.find).not.toHaveBeenCalled();
      const result = await partnershipService.findAll();
      expect(partnershipRepository.find).toHaveBeenCalled();
      expect(result).toEqual([new PartnershipEntity()]);
    });
  });

  describe('findPartnershipByID', () => {
    it('calls findById and retreive the partnership', async () => {
      const _id = 'myid';
      const mockPartnership = new PartnershipEntity();
      partnershipRepository.findOne.mockResolvedValue(mockPartnership);

      const result = await partnershipService.findById('myid');
      expect(result).toEqual(mockPartnership);

      expect(partnershipRepository.findOne).toHaveBeenCalledWith({ _id });
    });

    it('calls findById and throws an error is partnership not found or id is empty', async () => {
      partnershipRepository.findOne.mockResolvedValue(null);
      expect(partnershipService.findById('myid')).rejects.toThrow(HttpException);
      expect(partnershipService.findById()).rejects.toThrow(HttpException);
    });
  });

  describe('create Partnership', () => {
    it('calls create partnership and returns saved entity', async () => {
      expect(partnershipRepository.save).not.toHaveBeenCalled();

      const mockPartnership = {
        type: partnershipTypes.academic,
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        url: 'undefined'
      };
      const resultValues = {
        type: partnershipTypes.academic,
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
      const mockPartnershipResult = new PartnershipEntity();
      Object.assign(mockPartnershipResult, resultValues);
      partnershipRepository.save.mockResolvedValue(mockPartnershipResult);

      const result = await partnershipService.create(mockPartnership);
      expect(result).toEqual(mockPartnershipResult);
    });
  });

  describe('Delete Partnership', () => {
    it('Call delete repository to delete partnership and is successful', async () => {
      const mockEntity = new PartnershipEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;
      partnershipRepository.delete.mockResolvedValue({});
      partnershipRepository.findOne.mockResolvedValue(mockEntity);

      expect(partnershipRepository.delete).not.toHaveBeenCalled();
      expect(partnershipRepository.findOne).not.toHaveBeenCalled();
      await partnershipService.delete(_id);
      expect(partnershipRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(partnershipRepository.delete).toHaveBeenCalledWith({ _id });
    });

    it('Calls delete repository to delete partnership and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(partnershipService.delete(_id)).rejects.toThrow(HttpException);
    });
  });

  describe('Update Partnership', () => {
    it('Call update repository to update partnership and is successful', async () => {
      const mockEntity = new PartnershipEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;

      const mockEntityDto = {
        type: partnershipTypes.academic,
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        url: 'undefined',
        _id: _id
      };

      partnershipRepository.findOne.mockResolvedValue(mockEntity);
      partnershipRepository.save.mockResolvedValue(mockEntity);

      expect(partnershipRepository.findOne).not.toHaveBeenCalled();
      expect(partnershipRepository.save).not.toHaveBeenCalled();
      const toUpdate = Object.assign(mockEntity, mockEntityDto);
      const result = await partnershipService.update(_id, mockEntityDto);
      expect(partnershipRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(partnershipRepository.save).toHaveBeenCalledWith(toUpdate);
    });

    it('Calls update repository to update partnership and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(partnershipService.update(_id)).rejects.toThrow(HttpException);
    });
  });
});
