import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: "Lexus", model: "2022" },
    { id: uuid(), brand: "Honda", model: "2020" },
    { id: uuid(), brand: "Hyundai", model: "2019" },
    { id: uuid(), brand: "Toyota", model: '2015' },
    { id: uuid(), model: "2019", brand: "Jeep" }
  ]

  findAll() {
    return this.cars;
  }
  findById(id: string) {
    const car = this.cars.find(car => car.id === id);
    if (!car) {
      throw new NotFoundException(`The car with id: ${id} doesn't exist.`)
    }
    return car
  }



}
