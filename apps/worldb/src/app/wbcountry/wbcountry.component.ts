import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ScountryService } from '../scountry.service';

@Component({
  selector: 'wb-wbcountry',
  templateUrl: './wbcountry.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WbcountryComponent implements OnInit {
  public url: string;
  public catalog$: Observable<any>;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private scountryService: ScountryService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.url = `http://api.worldbank.org/V2/country/${params.prop}?format=json`;
      }
    );

    this.catalog$ = this.http
      .get<any>(this.url)
      .pipe(
        map(apiArray => {
          apiArray = apiArray[1];
          return apiArray.filter(item => item.id !== '');
        })
      );
  }

  public onChangeId(id: string) {
    this.scountryService.units$.next(id);
  }
}
