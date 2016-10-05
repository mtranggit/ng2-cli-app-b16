import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import {SECOND, HOUR} from './reducers';

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
  second$ = Observable.interval(1000).mapTo({type: SECOND, payload: 5});
  clock: any;
  
  constructor(public store: Store<any>) {
    // this.clock.subscribe(console.log.bind(console));
    // this.clock = this.click$.map(() => new Date());
    // this.clock = Observable.merge(
    //   Observable.interval(5000),
    //   this.click$
    // ).map( ()=> new Date());
    
    this.clock = store.select('clock');

    Observable.merge(
      // Observable.interval(1000),
      this.second$,
      // this.click$
      this.click$
    )
      .subscribe( (action) => {
        store.dispatch(action);
      })







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
