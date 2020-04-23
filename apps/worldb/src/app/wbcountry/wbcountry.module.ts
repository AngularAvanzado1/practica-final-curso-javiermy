import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WbcountryRoutingModule } from './wbcountry-routing.module';
import { WbcountryComponent } from './wbcountry.component';
import { WbdcountryComponent } from './wbdcountry/wbdcountry.component';
import { CountrycrModule } from '@pf/countrycr'


@NgModule({
  declarations: [WbcountryComponent, WbdcountryComponent],
  imports: [
    CommonModule,
    WbcountryRoutingModule,
    CountrycrModule
  ]
})
export class WbcountryModule { }
