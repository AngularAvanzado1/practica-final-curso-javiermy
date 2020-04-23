import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScountryService {
  public units$ = new BehaviorSubject('');

  constructor() { }
}
