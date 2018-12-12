import { Component, OnInit } from '@angular/core';
import { of, observable, fromEvent, Subscription } from 'rxjs';
import { User } from 'src/classes/user';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  user: User[];
  Subscription: Subscription;
  constructor() {
    this.simpleObservable();
    this.schoolUsers();
  }

  schoolUsers() {
    var user1 = new User();
    user1.username = "Andrew";
    user1.email = "andrew23@gmail.com";
    user1.isActive = true;

    var user2 = new User();
    user2.username = "Ramona";
    user2.email = "ramona68@yahoo.com";
    user2.isActive = false;

    var user3 = new User();
    user3.username = "Borian";
    user3.email = "Boriangeo@gmail.com";
    user3.isActive = false;

    var user4 = new User();
    user4.username = "Carmen";
    user4.email = "carmen.elisabeth@gmail.com";
    user4.isActive = true;

    var observable = of(user1, user2, user3, user4);
    var nameUsers = map((u: User) => u.username + "(" + u.email + ")");
    var activeUsers = filter((u: User) => u.isActive == true)

    var subscribeUsers = {
      next: x => console.log(x),
      error: err => { console.log(err.message) },
      complete: () => { console.log("completed") }
    }
    observable.pipe(activeUsers, nameUsers).subscribe(subscribeUsers);
  }
  ngOnInit() {

    this.Subscription = this.handlerKey();

    var checkBox = document.getElementById("clearonESC") as HTMLInputElement;
    var observable = fromEvent(checkBox, 'change');

    observable.subscribe((event: any) => {
      if (event.target.checked) {
        this.Subscription = this.handlerKey();
      }
      else {
        this.Subscription.unsubscribe();
      }
    })

  }
  simpleObservable() {
    var observable = of(1, 2, 3)
    var HandlerObservable1 = {
      next: x => console.log(x),
      error: err => console.log(err.message),
      complete: () => console.log("complete")
    }
    var HandlerObservable2 = {
      next: y => console.log(y),
      error: err => console.log(err.message),
      complete: () => console.log("this work")
    }
    observable.subscribe(HandlerObservable1);
    observable.subscribe(HandlerObservable2);
  }


  handlerKey(): Subscription {
    var nameInput = document.getElementById('name') as HTMLInputElement;
    var observable1 = fromEvent(nameInput, 'keydown');
    return observable1.subscribe((event: KeyboardEvent) => {
      // console.log(event);
      if (event.keyCode === 27) {
        nameInput.value = "";
      }
      observable1.subscribe((event: KeyboardEvent) => {
        if (event.keyCode == 13) {
          alert(nameInput.value);
        }
      })

    })

  }


}
