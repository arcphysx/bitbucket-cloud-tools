import { Injectable } from "@nestjs/common";

@Injectable()
export class KpiService {
  getHello(): string {
    return 'Hello World!';
  }
}