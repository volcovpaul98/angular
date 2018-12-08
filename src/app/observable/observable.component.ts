import { Component, OnInit } from '@angular/core';
import { of, observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() {
    this.simpleObservable();
  }

  ngOnInit() {
    this.handlerKey();
  }
  simpleObservable() {
    var observable = of(1, 2, 3);
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


  handlerKey() {
    var nameInput = document.getElementById('name') as HTMLInputElement;
    var observable1 = fromEvent(nameInput, 'keydown');
    observable1.subscribe((event: KeyboardEvent) => {
      console.log(event);
      if (event.keyCode === 27) {
        nameInput.value = "";
      }

    })
  }

}
