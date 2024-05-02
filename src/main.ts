import { NestFactory } from '@nestjs/core';
import {  Test,TestingModule } from '@nestjs/testing';
import { ApiService } from './api/api_service';
import { AppModule } from './app.module';
import { rearingDto } from './dto/rearing.dto';
import { HttpStatus } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const service = app.get(ApiService)
  const data : rearingDto = { 
      box_id:"A1",
      end_date:"2025-04-30 14:45:24.000",
      rearing_date:"2023-04-30 14:45:24.000",
      weight:"0.1",
      name:"name",
      type:"1",
      description:"test",
      record_by:"test",
      feed_freq:"12",
      child_id:"1",
      status:"1"
     }
  const result = await service.sendrearing(data);
 console.log(result)
  app.close()
}
bootstrap();
