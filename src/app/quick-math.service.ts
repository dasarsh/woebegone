import { Injectable } from '@angular/core';
import * as Math from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class QuickMathService {

  constructor() { }

  evaluateExpression(expression: string): any{
    return Math.eval(expression);
  }
}
