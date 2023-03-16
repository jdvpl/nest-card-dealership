import { Controller, Get, Post, Param, ParseIntPipe, Body, Patch, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }
  @Get()
  getAllCards() {
    return this.carsService.findAll();
  }
  @Get(':id')
  getCard(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findById(id)
  }
  @Post()
  createCar(@Body() body: any) {
    return body
  }
  @Patch(':id')
  updateCar(@Body() body: any, @Param('id', ParseIntPipe) id: number) {
    return { ...body, id }
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return { id }
  }
}
