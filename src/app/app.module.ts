import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { CalcKeypadComponent } from './calc-keypad/calc-keypad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalcScreenComponent } from './calc-screen/calc-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    CalcKeypadComponent,
    CalcScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
