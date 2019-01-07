import { Component, OnInit } from '@angular/core';
import { QuickMathService } from '../quick-math.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-calc-keypad',
  templateUrl: './calc-keypad.component.html',
  styleUrls: ['./calc-keypad.component.scss']
})
export class CalcKeypadComponent implements OnInit {

  public input: string;
  public callService: ApiService;
  public mathService: QuickMathService;

  constructor(private quickMathService: QuickMathService, private apiService: ApiService) {
    this.input = '';
    this.callService = apiService;
    this.mathService = quickMathService;
  }

  ngOnInit() {
  }

  click(input: string): void {
    if (input === '=') {
      this.quickMathService.evaluateExpression();
      this.call(this.mathService.display);
    } else if (input === 'AC') {
      this.quickMathService.resetExpression();
    } else {
      this.quickMathService.addToExpression(input);
    }
  }

  resetInput(): void {
    this.input = '';
  }

  call(result: string): void {
    const number = Math.floor(+result);
    this.apiService.processJson(number);
  }
}
