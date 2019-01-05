import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { CalcKeypadComponent } from './calc-keypad/calc-keypad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalcScreenComponent } from './calc-screen/calc-screen.component';
import { CalcLinksComponent } from './calc-links/calc-links.component';
import { CalcNavComponent } from './calc-nav/calc-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {  MatToolbarModule,
          MatButtonModule,
          MatSidenavModule,
          MatIconModule,
          MatListModule,
          MatCardModule
        } from '@angular/material';
import { MathNode } from 'mathjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    CalcKeypadComponent,
    CalcScreenComponent,
    CalcLinksComponent,
    CalcNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
