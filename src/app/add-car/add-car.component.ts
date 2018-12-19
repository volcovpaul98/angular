import { Component, OnInit } from '@angular/core';
import { Car } from 'src/classes/model';
import { CarServiceService} from 'src/app/car-service.service'


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})

export class AddCarComponent implements OnInit {
  carService:CarServiceService;
  constructor() {

  }

  ngOnInit() {
  }


  insert(car:Car) {
    this.carService.addCar(car).subscribe (x =>{
      
    })
  }
}
