import { Component, OnInit, Input } from '@angular/core';
import { Child} from 'src/classes/child'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  @Input()
  child:Child;
  constructor() { }

 
}
