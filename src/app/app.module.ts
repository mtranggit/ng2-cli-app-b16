import { Store, StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import { clockReducer } from './reducers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ counter: counterReducer, clock: clockReducer }, { counter: 0 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
