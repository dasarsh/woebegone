import { Component, OnInit } from '@angular/core';
import { QuickMathService } from '../quick-math.service';

@Component({
  selector: 'app-calc-screen',
  templateUrl: './calc-screen.component.html',
  styleUrls: ['./calc-screen.component.scss']
})
export class CalcScreenComponent implements OnInit {

  constructor(private quickMathService: QuickMathService) {
  }

  ngOnInit() {
  }

}
