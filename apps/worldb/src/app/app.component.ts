import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ScountryService } from './scountry.service';

@Component({
  selector: 'wb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {
  title = 'World B';
  public idRegion = '';

  constructor(
    private scountryService: ScountryService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.scountryService.units$.subscribe({
      next: units => {
        this.idRegion = units;
        // this.cdr.detectChanges();
      }
    });
  }
}

