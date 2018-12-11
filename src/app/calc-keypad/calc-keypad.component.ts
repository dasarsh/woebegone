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

  click(input: string): void {
    if (input === "=") {
      var result = Math.eval(this.input);
      this.resetInput();
    } else if (input === "AC") {
      this.resetInput();
    } else {
      this.input += input;
    }
  }

  resetInput(): void{
    this.input = "";
  }
}
