import { Component, OnInit, Input } from '@angular/core';
import { Region } from '@pf/domain';

@Component({
  selector: 'wb-region',
  templateUrl: './wbregion.component.html',
  styles: [
  ],
})
export class WBRegionComponent implements OnInit {
  @Input() public region: Region;

  constructor() { }

  ngOnInit() {
  }
}
