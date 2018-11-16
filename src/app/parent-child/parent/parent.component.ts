import { Component, OnInit } from '@angular/core';
import { Child} from 'src/classes/child'


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
child1:Child;
child2:Child;
  constructor() { 
  this.child1= new Child();
  this.child1.name="Donald";
  this.child1.balls=[true,true,true,true,true];
  this.child1.id=1;

  this.child2= new Child();
  this.child2.name="Trump";
  this.child2.balls=[true,true,true,true];
  this.child2.id=2;

}
  ngOnInit() {
  }

}
