import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User} from 'src/classes/user'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
@Input()
user:User;
@Output()
removeuser: EventEmitter<User> = new EventEmitter();

  constructor() { }

  deleteUser (){
    console.log(this.user)
    this.removeuser.emit(this.user);

  }
 
}
  
