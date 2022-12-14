import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EspritIngenieurEntity } from '../entities/EspritIngenieur.entity';
import { EspritIngenieurService } from '../EspritIngenieur.service';
import { Test } from '@nestjs/testing';
import { REQUEST } from '@nestjs/core';
import { ObjectID } from 'mongodb';
import { EspritIngenieurTypes } from '../entities/EspritIngenieur.enum';

const mockEspritIngenieurRepository = () => ({
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

describe('EspritIngenieur Service', () => {
  let EspritIngenieurService;
  let EspritIngenieurRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        EspritIngenieurService,
        {
          provide: getRepositoryToken(EspritIngenieurEntity),
          useFactory: mockEspritIngenieurRepository
        },
        {
          provide: REQUEST,
          useValue: mockRequest
        }
      ]
    }).compile();

    EspritIngenieurService = await module.resolve<EspritIngenieurService>(EspritIngenieurService);
    EspritIngenieurRepository = await module.get(getRepositoryToken(EspritIngenieurEntity));
  });

  describe('findAll', () => {
    it('gets all EspritIngenieurs', async () => {
      EspritIngenieurRepository.find.mockResolvedValue([new EspritIngenieurEntity()]);
      expect(EspritIngenieurRepository.find).not.toHaveBeenCalled();
      const result = await EspritIngenieurService.findAll();
      expect(EspritIngenieurRepository.find).toHaveBeenCalled();
      expect(result).toEqual([new EspritIngenieurEntity()]);
    });
  });

  describe('findEspritIngenieurByID', () => {
    it('calls findById and retreive the EspritIngenieur', async () => {
      const _id = 'myid';
      const mockEspritIngenieur = new EspritIngenieurEntity();
      EspritIngenieurRepository.findOne.mockResolvedValue(mockEspritIngenieur);

      const result = await EspritIngenieurService.findById('myid');
      expect(result).toEqual(mockEspritIngenieur);

      expect(EspritIngenieurRepository.findOne).toHaveBeenCalledWith({ _id });
    });

    it('calls findById and throws an error is EspritIngenieur not found or id is empty', async () => {
      EspritIngenieurRepository.findOne.mockResolvedValue(null);
      expect(EspritIngenieurService.findById('myid')).rejects.toThrow(HttpException);
      expect(EspritIngenieurService.findById()).rejects.toThrow(HttpException);
    });
  });

  describe('create EspritIngenieur', () => {
    it('calls create EspritIngenieur and returns saved entity', async () => {
      expect(EspritIngenieurRepository.save).not.toHaveBeenCalled();

      const mockEspritIngenieur = {
        type: EspritIngenieurTypes.admission,
        description: 'undefined',
        status: 'undefined',
        title: 'undefined',
      };
      const resultValues = {
        type: EspritIngenieurTypes.admission,
        createdAt: jest.fn(() => mockDate),
        date: jest.fn(() => mockDate),
        description: 'undefined',
        lastUpdateAt: jest.fn(() => mockDate),
        status: 'undefined',
        title: 'undefined',
        userCreated: {
          email: 'mock@mock.mock',
          username: 'mock'
        },
        userUpdated: {
          email: 'mock@mock.mock',
          username: 'mock'
        }
      };
      const mockEspritIngenieurResult = new EspritIngenieurEntity();
      Object.assign(mockEspritIngenieurResult, resultValues);
      EspritIngenieurRepository.save.mockResolvedValue(mockEspritIngenieurResult);

      const result = await EspritIngenieurService.create(mockEspritIngenieur);
      expect(result).toEqual(mockEspritIngenieurResult);
    });
  });

  describe('Delete EspritIngenieur', () => {
    it('Call delete repository to delete EspritIngenieur and is successful', async () => {
      const mockEntity = new EspritIngenieurEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;
      EspritIngenieurRepository.delete.mockResolvedValue({});
      EspritIngenieurRepository.findOne.mockResolvedValue(mockEntity);

      expect(EspritIngenieurRepository.delete).not.toHaveBeenCalled();
      expect(EspritIngenieurRepository.findOne).not.toHaveBeenCalled();
      await EspritIngenieurService.delete(_id);
      expect(EspritIngenieurRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(EspritIngenieurRepository.delete).toHaveBeenCalledWith({ _id });
    });

    it('Calls delete repository to delete EspritIngenieur and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(EspritIngenieurService.delete(_id)).rejects.toThrow(HttpException);
    });
  });

  describe('Update EspritIngenieur', () => {
    it('Call update repository to update EspritIngenieur and is successful', async () => {
      const mockEntity = new EspritIngenieurEntity();
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      mockEntity._id = _id;

      const mockEntityDto = {
        type: EspritIngenieurTypes.admission,
        description: 'undefined',
        status: 'undefined',
        title: 'undefined',
        _id: _id
      };

      EspritIngenieurRepository.findOne.mockResolvedValue(mockEntity);
      EspritIngenieurRepository.save.mockResolvedValue(mockEntity);

      expect(EspritIngenieurRepository.findOne).not.toHaveBeenCalled();
      expect(EspritIngenieurRepository.save).not.toHaveBeenCalled();
      const toUpdate = Object.assign(mockEntity, mockEntityDto);
      const result = await EspritIngenieurService.update(_id, mockEntityDto);
      expect(EspritIngenieurRepository.findOne).toHaveBeenCalledWith({ _id });
      expect(EspritIngenieurRepository.save).toHaveBeenCalledWith(toUpdate);
    });

    it('Calls update repository to update EspritIngenieur and throws exception on not found', async () => {
      const _id = new ObjectID('5e2f63d67c06a754d05da4b6');
      expect(EspritIngenieurService.update(_id)).rejects.toThrow(HttpException);
    });
  });
});
