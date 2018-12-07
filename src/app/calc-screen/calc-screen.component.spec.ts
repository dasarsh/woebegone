import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcScreenComponent } from './calc-screen.component';

describe('CalcScreenComponent', () => {
  let component: CalcScreenComponent;
  let fixture: ComponentFixture<CalcScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
