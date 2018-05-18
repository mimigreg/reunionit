import { TestBed, inject } from '@angular/core/testing';

import { CalendarToolkitService } from './calendar-toolkit.service';

describe('CalendarToolkitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarToolkitService]
    });
  });

  it('should be created', inject([CalendarToolkitService], (service: CalendarToolkitService) => {
    expect(service).toBeTruthy();
  }));
});
