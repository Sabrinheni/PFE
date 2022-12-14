import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EventEntity } from './../entities/event.entity';
import { EventService } from './../event.service';
import { Test } from '@nestjs/testing';
import { REQUEST } from '@nestjs/core';
import { ObjectID } from 'mongodb';
import { eventTypes } from '../entities/event.enum';

const mockEventRepository = () => ({
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

describe('Event Service', () => {
  let eventService;
  let eventRepository;

  jest.mock('./../../../shared/findByField.utils', () => {
    const original = require.requireActual('./../../../shared/findByField.utils');
    original.default = jest.fn();
    return original;
  });
  const findByField = require('./../../../shared/findByField.utils');

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        EventService,
        {
          provide: getRepositoryToken(EventEntity),
          useFactory: mockEventRepository
        },
        {
          provide: REQUEST,
          useValue: mockRequest
        }
      ]
    }).compile();

    eventService = await module.resolve<EventService>(EventService);
    eventRepository = await module.get(getRepositoryToken(EventEntity));
  });

  describe('findAll', () => {
    it('gets all events', async () => {
      eventRepository.find.mockResolvedValue([new EventEntity()]);
      expect(eventRepository.find).not.toHaveBeenCalled();
      const result = await eventService.findAll();
      expect(eventRepository.find).toHaveBeenCalled();
      expect(result).toEqual([new EventEntity()]);
    });
  });

  describe('create Event', () => {
    it('calls create event and returns saved entity', async () => {
      expect(eventRepository.save).not.toHaveBeenCalled();

      const mockEvent = {
        type: eventTypes.actualite,
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        url: 'undefined'
      };
      const resultValues = {
        type: eventTypes.actualite,
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
      const mockEventResult = new EventEntity();
      Object.assign(mockEventResult, resultValues);
      eventRepository.save.mockResolvedValue(mockEventResult);

      const result = await eventService.create(mockEvent);
      expect(result).toEqual(mockEventResult);
    });
  });

  describe('Delete Event', () => {
    it('Call delete repository to delete event and is successful', async () => {
      const mockEntity = new EventEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;
      eventRepository.delete.mockResolvedValue({});
      eventRepository.findOne.mockResolvedValue(mockEntity);
      const spying = jest.spyOn(findByField, 'findByField').mockReturnValueOnce({ _id });
      expect(eventRepository.delete).not.toHaveBeenCalled();
      expect(eventRepository.findOne).not.toHaveBeenCalled();
      await eventService.delete(_id);
      // expect(eventRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(eventRepository.delete).toHaveBeenCalledWith({ _id });
    });
  });

  describe('Update Event', () => {
    it('Call update repository to update event and is successful', async () => {
      const mockEntity = new EventEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;

      const mockEntityDto = {
        type: eventTypes.actualite,
        description: 'undefined',
        image: 'undefined',
        status: 'undefined',
        title: 'undefined',
        url: 'undefined',
        _id: _id
      };

      eventRepository.findOne.mockResolvedValue(mockEntity);
      eventRepository.save.mockResolvedValue(mockEntity);

      expect(eventRepository.findOne).not.toHaveBeenCalled();
      expect(eventRepository.save).not.toHaveBeenCalled();
      const result = await eventService.update(mockEntity, mockEntityDto);
      // expect(eventRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(eventRepository.save).toHaveBeenCalledWith(result);
    });
  });
});
