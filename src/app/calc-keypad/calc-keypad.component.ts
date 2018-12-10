import { Component, OnInit } from '@angular/core';
import { QuickMathService } from '../quick-math.service';

@Component({
  selector: 'app-calc-keypad',
  templateUrl: './calc-keypad.component.html',
  styleUrls: ['./calc-keypad.component.scss']
})
export class CalcKeypadComponent implements OnInit {

  public input: string;

  constructor(private quickMathService: QuickMathService) {
    this.input = "";
  }

  ngOnInit() {
  }

  click(input: string): void {
    if (input === "=") {
      this.quickMathService.evaluateExpression(this.input);
      this.resetInput();
    } else if (input === "CE") {
      this.resetInput();
    } else {
      this.input += input;
    }
  }

  resetInput(): void{
    this.input = "";
  }
}
