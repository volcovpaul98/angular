import { Component, OnInit } from '@angular/core';
import { User} from 'src/classes/user'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  ListOfUsers: User[];
  constructor() { 
    this.ListOfUsers= [];
    var user1 = new  User();
    user1.username = "andrew";
    user1.email="andrew@gmail.com"
    user1.isActive=true;

    
    var user2 = new User();
    user2.username = "Roxana";
    user2.email = "roxana22@gmail.com"
    user2.isActive= false;

    
   this.ListOfUsers.push(user1);
   this.ListOfUsers.push(user2);
  }

  ngOnInit() {
  }
  userAdded(user:User){
    console.log("received user with name " + user.username);
    this.ListOfUsers.push(user);
  }
  deleteThisUser(user:User){
    const index = this.ListOfUsers.indexOf(user,0);
    if  (index > -1){
      this.ListOfUsers.splice(index, 1);
    }
    
  }
}
