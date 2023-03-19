import { Controller, Get, Post, Param, Body, ParseUUIDPipe, Patch, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }
  @Get()
  getAllCards() {
    return this.carsService.findAll();
  }
  @Get(':id')
  getCard(@Param('id', new ParseUUIDPipe({ version: '5' })) id: string) {
    return this.carsService.findById(id)
  }
  @Post()
  createCar(@Body() body: any) {
    return body
  }
  @Patch(':id')
  updateCar(@Body() body: any, @Param('id', ParseUUIDPipe) id: string) {
    return { ...body, id }
  }
  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return { id }
  }
}
