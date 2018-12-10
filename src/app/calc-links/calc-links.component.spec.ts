import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcLinksComponent } from './calc-links.component';

describe('CalcLinksComponent', () => {
  let component: CalcLinksComponent;
  let fixture: ComponentFixture<CalcLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
