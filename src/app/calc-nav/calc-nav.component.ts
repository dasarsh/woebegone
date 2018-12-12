import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuickMathService } from '../quick-math.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-calc-nav',
  templateUrl: './calc-nav.component.html',
  styleUrls: ['./calc-nav.component.scss'],
})
export class CalcNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver, private quickMathService: QuickMathService, private apiService: ApiService) {}

  call(): void{
    var result = this.apiService.get();
  }
}
