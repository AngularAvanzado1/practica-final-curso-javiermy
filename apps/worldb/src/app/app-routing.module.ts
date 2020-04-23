import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Home/Home.module').then(
        m => m.HomeModule
      )
  },
  {
    path: 'regions',
    loadChildren: () =>
      import('./WBRegions/WBRegions.module').then(
        m => m.WbregionsModule
      )
  },
  {
    path: 'cregion',
    loadChildren: () =>
      import('./WBContinentalsregion/WBContinentalsregion.module').then(
        m => m.WbcontinentalsregionModule
      )
  },
  {
    path: 'country',
    loadChildren: () =>
      import('./WBCountry/WBCountry.module').then(
        m => m.WbcountryModule
      )
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
