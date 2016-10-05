import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from './reducers';

interface AppState {
  counter: number;
}


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

    counter: Observable<number>;

    constructor(public store: Store<AppState>){
        this.counter = store.select('counter');
    }

    increment(){
        this.store.dispatch({ type: INCREMENT });
    }

    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }

    reset(){
        this.store.dispatch({ type: RESET });
    }
  ngOnInit() {
  }

}
