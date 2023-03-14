import { Controller, Get, Post } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Post()
  getAllCards() {
    return ["Lexus", "Honda", "Hyundai", "Toyota", "Jeep"]
  }
}
