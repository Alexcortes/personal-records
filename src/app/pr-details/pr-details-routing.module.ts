import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrDetailsPage } from './pr-details.page';

const routes: Routes = [
  {
    path: '',
    component: PrDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrDetailsPageRoutingModule {}
