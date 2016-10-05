import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/scan';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import {SECOND, HOUR, ADVANCE, RECALL, PeopleState} from './reducers';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // clock: Observable<any> = Observable.interval(1000)
  //                                       .map((_) => new Date());
  title = 'app works!';

  /**
   *
   */
  click$: Observable<any> = new Subject().map( (value: any) => {
      const val = parseInt(value);
      return {  type: HOUR, payload: val}
  });

  person$: Observable<any> = new Subject().map( (value: any) => ({  type: ADVANCE, payload: value}));
  recall$: Observable<any> = new Subject();
  
  second$ = Observable.interval(1000).mapTo({type: SECOND, payload: 5});
  time: any;
  people: any;

  constructor(public store: Store<PeopleState>) {
    // this.clock.subscribe(console.log.bind(console));
    // this.clock = this.click$.map(() => new Date());
    // this.clock = Observable.merge(
    //   Observable.interval(5000),
    //   this.click$
    // ).map( ()=> new Date());
    
    this.time = store.select('clock');
    this.people = store.select('people');

    Observable.merge(
      // Observable.interval(1000),
      this.second$,
      // this.click$
      this.click$,
      this.person$,
      this.recall$.withLatestFrom(this.time, (_, y) => y).map( time => ({ type: RECALL, payload: time}))
    )
      .subscribe(store.dispatch.bind(store));
      // .subscribe( (action) => {
      //   store.dispatch(action);
      // })







    //   .startWith(new Date())
    //   .scan((accummulator, current) => {
    //     const date = new Date(accummulator.getTime());
    //     if (current === 'second') {
    //       date.setSeconds(date.getSeconds() + 1)
    //     }
    //     else if (current === 'hour') {
    //       date.setHours(date.getHours() + 1)
    //     }
    //     return date;
    //  })

    // this.clock.subscribe(console.log.bind(console));
  }
}
