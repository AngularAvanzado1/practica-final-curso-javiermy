import { Component, OnInit, Input } from '@angular/core';
import { Continentalregions } from '@pf/domain';

@Component({
  selector: 'pb-contregions-contregions-template',
  templateUrl: './contregions-template.component.html',
  styleUrls: ['./contregions-template.component.css']
})
export class ContregionsTemplateComponent implements OnInit {
  @Input() public continentalregions: Continentalregions;

  constructor() { }

  ngOnInit(): void {
  }

}
