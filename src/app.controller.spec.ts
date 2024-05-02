import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiService } from './api/api_service';
import { HttpStatus } from '@nestjs/common';
import { rearingDto } from './dto/rearing.dto';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
describe('ApiService', () => {
  let service: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiService],
    }).compile();

    service = module.get<ApiService>(ApiService);
  });

  it('should send data to function', async () => {
    const data: rearingDto = { 
      box_id: "A1",
      end_date: "2025-04-30 14:45:24.000",
      rearing_date: "2023-04-30 14:45:24.000",
      weight: "0.1",
      name: "name",
      type: "1",
      description: "test",
      record_by: "test",
      feed_freq: "12",
      child_id: "1",
      status: "1"
    };

    const result = await service.sendrearing(data);
    expect(result.status).toBe(HttpStatus.CREATED);
  });


  it('should give data',async()=>{
    const result = await service.getrearing();
    expect(result.status).toBe(HttpStatus.OK)
  });




});
