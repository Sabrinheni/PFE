import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ClubEntity } from './../entities/club.entity';
import { ClubService } from './../club.service';
import { Test } from '@nestjs/testing';
import { REQUEST } from '@nestjs/core';
import { ObjectID } from 'mongodb';
import { clubTypes, sportTypes } from '../entities/club.enum';

const mockClubRepository = () => ({
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

describe('Club Service', () => {
  let clubService;
  let clubRepository;

  jest.mock('./../../../shared/findByField.utils', () => {
    const original = require.requireActual('./../../../shared/findByField.utils');
    original.default = jest.fn();
    return original;
  });
  const findByField = require('./../../../shared/findByField.utils');

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ClubService,
        {
          provide: getRepositoryToken(ClubEntity),
          useFactory: mockClubRepository
        },
        {
          provide: REQUEST,
          useValue: mockRequest
        }
      ]
    }).compile();

    clubService = await module.resolve<ClubService>(ClubService);
    clubRepository = await module.get(getRepositoryToken(ClubEntity));
  });

  describe('findAll', () => {
    it('gets all clubs', async () => {
      clubRepository.find.mockResolvedValue([new ClubEntity()]);
      expect(clubRepository.find).not.toHaveBeenCalled();
      const result = await clubService.findAll();
      expect(clubRepository.find).toHaveBeenCalled();
      expect(result).toEqual([new ClubEntity()]);
    });
  });

  describe('create Club', () => {
    it('calls create club and returns saved entity', async () => {
      expect(clubRepository.save).not.toHaveBeenCalled();

      const mockClub = {
        type: clubTypes.other,
        sport: sportTypes.individual,
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        url: 'undefined'
      };
      const resultValues = {
        type: clubTypes.other,
        sport: sportTypes.individual,
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
      const mockClubResult = new ClubEntity();
      Object.assign(mockClubResult, resultValues);
      clubRepository.save.mockResolvedValue(mockClubResult);

      const result = await clubService.create(mockClub);
      expect(result).toEqual(mockClubResult);
    });
  });

  describe('Delete Club', () => {
    it('Call delete repository to delete club and is successful', async () => {
      const mockEntity = new ClubEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;
      clubRepository.delete.mockResolvedValue({});
      clubRepository.findOne.mockResolvedValue(mockEntity);
      const spying = jest.spyOn(findByField, 'findByField').mockReturnValueOnce({ _id });
      expect(clubRepository.delete).not.toHaveBeenCalled();
      expect(clubRepository.findOne).not.toHaveBeenCalled();
      await clubService.delete(_id);
      // expect(clubRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(clubRepository.delete).toHaveBeenCalledWith({ _id });
    });
  });

  describe('Update Club', () => {
    it('Call update repository to update club and is successful', async () => {
      const mockEntity = new ClubEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;

      const mockEntityDto = {
        type: clubTypes.other,
        sport: sportTypes.individual,
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        url: 'undefined',
        _id: _id
      };

      clubRepository.findOne.mockResolvedValue(mockEntity);
      clubRepository.save.mockResolvedValue(mockEntity);

      expect(clubRepository.findOne).not.toHaveBeenCalled();
      expect(clubRepository.save).not.toHaveBeenCalled();
      const result = await clubService.update(mockEntity, mockEntityDto);
      // expect(clubRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(clubRepository.save).toHaveBeenCalledWith(result);
    });
  });
});
