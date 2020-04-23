import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wb-wbcontinentalsregion',
  templateUrl: './wbcontinentalsregion.component.html',
  styles: [
  ]
})
export class WbcontinentalsregionComponent implements OnInit {
  public url: string;
  public catalog$: Observable<any>;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.url = `http://api.worldbank.org/v2/region/${params.prop}/country?per_page=1000&format=json`;
        console.log(params.prop);
        console.log(this.url);
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
}
