import { Component, OnInit } from '@angular/core';
import { User } from 'src/classes/user'
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  ListOfUsers: User[];
  usersService: EmployeesService;
  isLoading: boolean;


  constructor(userservice: EmployeesService) {
    this.usersService = userservice;

  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.isLoading = true;
    this.usersService.getAll().subscribe(response => {
      console.log(response);
      this.isLoading = false;
      this.ListOfUsers = response;
    });
  }

  userAdded(user: User) {
    console.log("received user with name " + user.username);
    this.isLoading = true;
    this.usersService.saveUser(user).subscribe(x => {
      this.isLoading = false;
      this.getUsers();
    });
  }
  deleteThisUser(user: User) {
    this.isLoading = true;
    this.usersService.deleteUser(user._id).subscribe(x => {
      this.isLoading = false;
      this.getUsers();
    })
  }

}

