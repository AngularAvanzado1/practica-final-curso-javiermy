import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'wb-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {
  public catalog$: Observable<any>;
  constructor() { }

  ngOnInit() {
  }
}
