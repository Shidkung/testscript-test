import { Injectable, HttpStatus, Param } from '@nestjs/common';
import { rearingDto } from 'src/dto/rearing.dto';
import * as http from 'http';

@Injectable()
export class ApiService {
  private apiUrl = 'http://localhost:3032/';

  async sendrearing(rearing: rearingDto): Promise<{ data: any; status: number }> {
    const param = {
        params:rearing
    }
    const data = JSON.stringify(param);

    const options: http.RequestOptions = {
      hostname: 'localhost',
      port: 3032,
      path: '/api/rearing',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      },
    };

    return new Promise<{ data: any; status: number }>((resolve, reject) => {
      const req = http.request(options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
          responseData += chunk;
        });

        res.on('end', () => {
          const parsedData = JSON.parse(responseData);
          resolve({ data: parsedData, status: res.statusCode });
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.write(data);
      req.end();
    });
  }


  async getrearing(): Promise<{ data: any; status: number }> {
    const options: http.RequestOptions = {
      hostname: 'localhost',
      port: 3032,
      path: '/api/rearing',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return new Promise<{ data: any; status: number }>((resolve, reject) => {
      const req = http.request(options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
          responseData += chunk;
        });

        res.on('end', () => {
          const parsedData = JSON.parse(responseData);
          resolve({ data: parsedData, status: res.statusCode });
        });
      });

      req.on('error', (error) => {
        reject(error);
      });
      req.end();
    });
  }
}
