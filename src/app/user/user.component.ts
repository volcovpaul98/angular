import { Component, OnInit, Input } from '@angular/core';
import { User} from 'src/classes/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
@Input()
user:User;
  constructor() { }


}
