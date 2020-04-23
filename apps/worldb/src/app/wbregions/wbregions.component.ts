import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { WbregionsService } from './wbregions.service';

@Component({
  selector: 'wb-wbregions',
  templateUrl: './wbregions.component.html',
  styles: [
  ]
})
export class WbregionsComponent implements OnInit {
  public catalog$: Observable<any>;

  constructor(private wbregionsService: WbregionsService) { }

  ngOnInit(): void {
    this.catalog$ = this.wbregionsService.getRegions();
  }
}
