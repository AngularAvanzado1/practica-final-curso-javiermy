import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WbregionsRoutingModule } from './wbregions-routing.module';
import { WbregionsComponent } from './wbregions.component';
import { WBRegionComponent } from './wbregion/wbregion.component';
import { RegionsModule } from '@pf/regions'

@NgModule({
  declarations: [WbregionsComponent, WBRegionComponent],
  imports: [
    CommonModule,
    WbregionsRoutingModule,
    RegionsModule
  ]
})
export class WbregionsModule { }
