import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WbcountryComponent } from './wbcountry.component';


const routes: Routes = [{ path: '', component: WbcountryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WbcountryRoutingModule { }
