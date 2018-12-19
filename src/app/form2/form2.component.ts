import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Car } from 'src/classes/model'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../car.service';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  
  carForm: FormGroup;
  carVersions: Car[] = [];
  engines = ['Gasoline', 'Diesel', 'Hybrid', 'Electric'];
  @Input()
  car:Car;
  @Output()
  submit: EventEmitter<Car> = new EventEmitter();
  
  constructor(fb: FormBuilder, serv: CarService) {
    var date = new Date(); 
    this.carForm = fb.group({
      model: [this.car.model, Validators.required],
      vin: [this.car.vin, Validators.compose([Validators.required, Validators.minLength(17), Validators.maxLength(17)])],
      year: [this.car.year, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.min(1900), Validators.max(date.getFullYear())])],
      forSale: [this.car.forSale, Validators.required],
      engine: [this.car.engine, Validators.required],
    });
    this.carForm.valueChanges.subscribe((x:any) =>{
      this.carVersions.push(x);
    });
    
  }

  onSubmit() {
    this.car = this.carForm.value;
    console.log(this.car);
    console.log(this.carVersions);
    this.submit.emit(this.car);
  }
  onReset() {
    this.carForm.reset(this.car);
  }
  ngOnInit() {
  }

}
