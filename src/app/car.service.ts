import { Injectable } from '@angular/core';
import { Car } from 'src/classes/model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }
  getCar(): Car {
    var car = new Car();
    car.model = "Audi";
    car.vin = "AMI75H8JK9A0KJYT5";
    car.year = 1995;
    car.engine = "Diesel";
    car.forSale = false;

    return car;

  }
}
