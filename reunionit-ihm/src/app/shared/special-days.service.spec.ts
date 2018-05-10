import { TestBed, inject } from '@angular/core/testing';

import { SpecialDaysService } from './special-days.service';

describe('SpecialDaysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecialDaysService]
    });
  });

  it('should be created', inject([SpecialDaysService], (service: SpecialDaysService) => {
    expect(service).toBeTruthy();
  }));
});
