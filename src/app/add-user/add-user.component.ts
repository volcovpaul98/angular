import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { User } from 'src/classes/user';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
user:User;

@Output()
userAdded: EventEmitter<User> = new EventEmitter();
  constructor() { 
    this.user = new User();
  }
 addUser(){
   console.log(this.user);
   this.userAdded.emit(this.user)

   this.user = new User();
 }
}
