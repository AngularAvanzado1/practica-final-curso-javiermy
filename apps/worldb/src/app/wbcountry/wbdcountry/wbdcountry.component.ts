import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Contrycr } from '@pf/domain';

@Component({
  selector: 'wb-wbdcountry',
  templateUrl: './wbdcountry.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WbdcountryComponent implements OnInit {
  @Input() public contrycr: Contrycr;
  @Output() public changeItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(id: string){
    this.changeItem.next(id);
  }

}
