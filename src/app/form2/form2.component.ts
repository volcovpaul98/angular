import { Component, OnInit } from '@angular/core';
import { Car} from 'src/classes/model'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../car.service';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
car:Car;
carForm: FormGroup;
engines = ['Gasoline','Diesel', 'Hybrid', 'Electric'];
  constructor(fb: FormBuilder, serv:CarService) { 
    this.car= new Car();

    this.car.model = "Mercedes";
    this.car.vin = "V18N87BV9J7GF3A9J";
    this.car.year = 2004;
    this.car.forSale = true;
    this.car.engine = "Gasoline";
    var date = new Date();
    this.car=serv.getCar();
    this.carForm = fb.group ({
      model: [this.car.model, Validators.required],
      vin: [this.car.vin , Validators.compose([ Validators.required, Validators.minLength(17), Validators.maxLength(17)])],
      year: [this.car.year , Validators.compose([ Validators.required , Validators.minLength(4), Validators.maxLength(4), Validators.min(1900), Validators.max(date.getFullYear())])],
      forSale: [this.car.forSale,  Validators.required],
      engine: [this.car.engine ,  Validators.required],
    });
  }
  
  onSubmit(){
    this.car = this.carForm.value;
    console.log(this.car);
  }
  ngOnInit() {
  }

}
