import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Child} from 'src/classes/child'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  @Input()
  child:Child;
  
  @Output()
  emitPass:  EventEmitter<number>= new EventEmitter()
  
  constructor() { }

  passBall(){
    this.emitPass.emit(this.child.id);
    console.log(this.child.id)
  }
}