import { Injectable } from '@angular/core';
import * as Math from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class QuickMathService {

  public result: any;

  constructor() { 
    this.result = 0;
  }

  evaluateExpression(expression: string): any{
    this.result = Math.eval(expression);
    return this.result;
  }
}
