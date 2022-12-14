import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TimeTableEntity } from './../entities/timeTable.entity';
import { TimeTableService } from './../timeTable.service';
import { Test } from '@nestjs/testing';
import { REQUEST } from '@nestjs/core';
import { ObjectID } from 'mongodb';

const mockTimeTableRepository = () => ({
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

describe('TimeTable Service', () => {
  let timeTableService;
  let timeTableRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TimeTableService,
        {
          provide: getRepositoryToken(TimeTableEntity),
          useFactory: mockTimeTableRepository
        },
        {
          provide: REQUEST,
          useValue: mockRequest
        }
      ]
    }).compile();

    timeTableService = await module.resolve<TimeTableService>(TimeTableService);
    timeTableRepository = await module.get(getRepositoryToken(TimeTableEntity));
  });

  describe('findAll', () => {
    it('gets all timeTables', async () => {
      timeTableRepository.find.mockResolvedValue([new TimeTableEntity()]);
      expect(timeTableRepository.find).not.toHaveBeenCalled();
      const result = await timeTableService.findAll();
      expect(timeTableRepository.find).toHaveBeenCalled();
      expect(result).toEqual([new TimeTableEntity()]);
    });
  });

  describe('findTimeTableByID', () => {
    it('calls findById and retreive the timeTable', async () => {
      const _id = 'myid';
      const mockTimeTable = new TimeTableEntity();
      timeTableRepository.findOne.mockResolvedValue(mockTimeTable);

      const result = await timeTableService.findById('myid');
      expect(result).toEqual(mockTimeTable);

      expect(timeTableRepository.findOne).toHaveBeenCalledWith({ _id });
    });

    it('calls findById and throws an error is timeTable not found or id is empty', async () => {
      timeTableRepository.findOne.mockResolvedValue(null);
      expect(timeTableService.findById('myid')).rejects.toThrow(HttpException);
      expect(timeTableService.findById()).rejects.toThrow(HttpException);
    });
  });

  describe('create TimeTable', () => {
    it('calls create timeTable and returns saved entity', async () => {
      expect(timeTableRepository.save).not.toHaveBeenCalled();

      const mockTimeTable = {
        btnName: 'undefined',
        description: 'undefined',
        file: 'undefined',
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
        file: 'undefined',
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
      const mockTimeTableResult = new TimeTableEntity();
      Object.assign(mockTimeTableResult, resultValues);
      timeTableRepository.save.mockResolvedValue(mockTimeTableResult);

      const result = await timeTableService.create(mockTimeTable);
      expect(result).toEqual(mockTimeTableResult);
    });
  });

  describe('Delete TimeTable', () => {
    it('Call delete repository to delete timeTable and is successful', async () => {
      const mockEntity = new TimeTableEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;
      timeTableRepository.delete.mockResolvedValue({});
      timeTableRepository.findOne.mockResolvedValue(mockEntity);

      expect(timeTableRepository.delete).not.toHaveBeenCalled();
      expect(timeTableRepository.findOne).not.toHaveBeenCalled();
      await timeTableService.delete(_id);
      expect(timeTableRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(timeTableRepository.delete).toHaveBeenCalledWith({ _id });
    });

    it('Calls delete repository to delete timeTable and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(timeTableService.delete(_id)).rejects.toThrow(HttpException);
    });
  });

  describe('Update TimeTable', () => {
    it('Call update repository to update timeTable and is successful', async () => {
      const mockEntity = new TimeTableEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;

      const mockEntityDto = {
        btnName: 'undefined',
        description: 'undefined',
        file: 'undefined',
        status: 'undefined',
        title: 'undefined',
        titleDescription: 'undefined',
        url: 'undefined',
        _id: _id
      };

      timeTableRepository.findOne.mockResolvedValue(mockEntity);
      timeTableRepository.save.mockResolvedValue(mockEntity);

      expect(timeTableRepository.findOne).not.toHaveBeenCalled();
      expect(timeTableRepository.save).not.toHaveBeenCalled();
      const toUpdate = Object.assign(mockEntity, mockEntityDto);
      const result = await timeTableService.update(_id, mockEntityDto);
      expect(timeTableRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(timeTableRepository.save).toHaveBeenCalledWith(toUpdate);
    });

    it('Calls update repository to update timeTable and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(timeTableService.update(_id)).rejects.toThrow(HttpException);
    });
  });
});
