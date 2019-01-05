import { TestBed } from '@angular/core/testing';

import { QuickMathService } from './quick-math.service';

describe('QuickMathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuickMathService = TestBed.get(QuickMathService);
    expect(service).toBeTruthy();
  });
});
