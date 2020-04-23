import { Region } from '@pf/domain';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pb-regions-region-template',
  templateUrl: './region-template.component.html',
  styleUrls: ['./region-template.component.css']
})
export class RegionTemplateComponent implements OnInit {
  @Input() public region: Region;
  constructor() { }

  ngOnInit(): void {
  }

}
