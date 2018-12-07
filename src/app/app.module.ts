import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { CalcKeypadComponent } from './calc-keypad/calc-keypad.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    CalcKeypadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
