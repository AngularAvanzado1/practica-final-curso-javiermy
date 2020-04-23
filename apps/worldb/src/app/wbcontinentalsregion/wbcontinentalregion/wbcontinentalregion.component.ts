import { Component, OnInit, Input } from '@angular/core';
import { Continentalregions } from '@pf/domain';

@Component({
  selector: 'wb-wbcontinentalregion',
  templateUrl: './wbcontinentalregion.component.html',
  styles: [
  ]
})
export class WbcontinentalregionComponent implements OnInit {
  @Input() public continentalregions: Continentalregions;

  constructor() { }

  ngOnInit() {
  }

}



