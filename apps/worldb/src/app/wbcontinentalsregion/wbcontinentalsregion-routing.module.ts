import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WbcontinentalsregionComponent } from './wbcontinentalsregion.component';

const routes: Routes = [{ path: '', component: WbcontinentalsregionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WbcontinentalsregionRoutingModule { }
