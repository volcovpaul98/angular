import { Component, OnInit } from '@angular/core';
import { Car} from 'src/classes/model'
@Component({
  selector: 'app-form-exercice',
  templateUrl: './form-exercice.component.html',
  styleUrls: ['./form-exercice.component.css']
})
export class FormExerciceComponent implements OnInit {
 car:Car;
 engines = ["Diesel","Gasoline","Electric","GPL"];
  constructor() { 
    this.car= new Car();
    this.car.model = "Mercedes";
    this.car.vin = "V18N87BV9J7GF3A9J";
    this.car.year = 2004;
    this.car.forSale = true;
    this.car.engine = "Diesel"
   
  }
  formSubmit(){
    console.log("Masina pe care o doriti este:"+this.car.model);
  }
  ngOnInit() {
  }

}
