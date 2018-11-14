import { Component, OnInit, Input } from '@angular/core';
import { Users} from 'src/classes/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()
user:Users;
  constructor() { }

  ngOnInit() {
  }

}
