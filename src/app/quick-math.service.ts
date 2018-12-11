import { Injectable } from '@angular/core';
import * as Math from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class QuickMathService {

  public display: string;
  public expression: string;
  public newExpression: boolean;
  public enableCallButton: boolean;

  constructor() {
    this.display = "0";
    this.expression = "";
    this.newExpression = true;
    this.enableCallButton = false;
  }

  evaluateExpression(): void {
    var result = Math.eval(this.expression);
    this.display = result + "";
    if(result > 0){
      this.enableCallButton = true;
    }
    this.expression = "0";
    this.newExpression = true;
  }

  addToExpression(input: string): void {
    if (this.newExpression) {
      if (this.inputIsOperator(input)) {
        return;
      }
      if (input === ".") {
        this.expression = "0.";
      } else {
        this.expression = input;
      }
      this.newExpression = false;
    } else {
      this.expression += input;
    }
    this.display = this.expression;
    this.parseExpression();
  }

  resetExpression(): void {
    this.display = "0";
    this.expression = "0";
  }

  parseExpression(): void {
    var reMult = /[*]/gi;
    var reDiv = /[/]/gi;
    this.display = this.display.replace(reMult, "×");
    this.display = this.display.replace(reDiv, "÷");
  }

  inputIsOperator(input: string): boolean {
    if (input === "+" || input === "-" || input === "*" || input === "/" || input === "%" || input === "=") {
      return true;
    }
    return false;
  }
}
