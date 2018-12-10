import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-screen',
  templateUrl: './calc-screen.component.html',
  styleUrls: ['./calc-screen.component.scss']
})
export class CalcScreenComponent implements OnInit {

  public value: string;

  constructor() { 
    this.value = "10";
  }

  ngOnInit() {
  }

}
