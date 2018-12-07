import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-keypad',
  templateUrl: './calc-keypad.component.html',
  styleUrls: ['./calc-keypad.component.scss']
})
export class CalcKeypadComponent implements OnInit {

  public input: string;

  constructor() {
    this.input = "";
   }

  ngOnInit() {
  }

  click(input: string): void{
    this.input += input;
    console.log(this.input);
  }

}
