import { TestBed } from '@angular/core/testing';

import { ScountryService } from './scountry.service';

describe('ScountryService', () => {
  let service: ScountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
