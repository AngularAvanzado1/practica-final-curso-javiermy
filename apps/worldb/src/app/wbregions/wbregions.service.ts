import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WbregionsService {
  constructor(private http: HttpClient) { }

  public getRegions(): Observable<any> {
    return this.http
    .get<any>('http://api.worldbank.org/v2/region/?format=json')
    .pipe(
      map(apiArray => {
        apiArray = apiArray[1];
        return apiArray.filter(item => item.id !== '');
      })
    );
  }
}
