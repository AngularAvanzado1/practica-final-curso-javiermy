import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WbregionsComponent } from './wbregions.component';

const routes: Routes = [{ path: '', component: WbregionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WbregionsRoutingModule { }
