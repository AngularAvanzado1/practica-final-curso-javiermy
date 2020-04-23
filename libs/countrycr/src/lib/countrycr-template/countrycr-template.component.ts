import { Component, OnInit, Input } from '@angular/core';
import { Contrycr } from '@pf/domain';

@Component({
  selector: 'pb-countrycr-countrycr-template',
  templateUrl: './countrycr-template.component.html',
  styleUrls: ['./countrycr-template.component.css']
})
export class CountrycrTemplateComponent implements OnInit {
  @Input() public contrycr: Contrycr;

  constructor() { }

  ngOnInit(): void {
  }

}
