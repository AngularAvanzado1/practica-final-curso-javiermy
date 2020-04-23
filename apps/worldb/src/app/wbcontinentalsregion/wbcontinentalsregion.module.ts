import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WbcontinentalsregionRoutingModule } from './wbcontinentalsregion-routing.module';
import { WbcontinentalsregionComponent } from './wbcontinentalsregion.component';
import { WbcontinentalregionComponent } from './wbcontinentalregion/wbcontinentalregion.component';
import { ContregionsModule } from '@pf/contregions'

@NgModule({
  declarations: [WbcontinentalsregionComponent, WbcontinentalregionComponent],
  imports: [
    CommonModule,
    WbcontinentalsregionRoutingModule,
    ContregionsModule
  ]
})
export class WbcontinentalsregionModule { }
