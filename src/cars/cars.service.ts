import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: "Lexus", model: 2022 }, { id: 2, brand: "Honda", model: 2020 }, { id: 3, brand: "Hyundai", model: 2019 }, { id: 4, brand: "Toyota" }, { id: 5, mode: 2019, brand: "Jeep" }]

  findAll() {
    return this.cars;
  }
  findById(id: number) {
    const car = this.cars.find(car => car.id === id);
    if (!car) {
      throw new NotFoundException(`The car with id: ${id} doesn't exist.`)
    }
    return car
  }



}
