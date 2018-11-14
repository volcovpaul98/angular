import { Component, OnInit } from '@angular/core';
import { Users} from 'src/classes/user'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  ListOfUsers: Users[];
  constructor() { 
    this.ListOfUsers= [];
    var user1 = new  Users("Andrei","andrei2915@yahoo.com",false);
    var user2 = new Users("andrew","andrew151@yahoo.com",true);
   this.ListOfUsers.push(user1);
   this.ListOfUsers.push(user2);
  }

  ngOnInit() {
  }

}
