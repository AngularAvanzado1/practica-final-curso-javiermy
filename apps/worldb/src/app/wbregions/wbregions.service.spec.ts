import { TestBed } from '@angular/core/testing';

import { WbregionsService } from './wbregions.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpTestingController} from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('WbregionsService', () => {
  let service: WbregionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WbregionsService]
    });
    service = TestBed.inject(WbregionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be not null', () => {
    const catalog$= service.getRegions();
    expect(catalog$).toBeTruthy();
  });

});
