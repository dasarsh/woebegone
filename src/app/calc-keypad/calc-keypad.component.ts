import { Component, OnInit } from '@angular/core';
import * as Math from 'mathjs';

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
    if(input === "="){
      var result = Math.eval(this.input);
      console.log(result);
    }else{
      this.input += input;
      console.log(this.input);
    }
  }
}
