import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrulistPage } from './frulist.page';

const routes: Routes = [
  {
    path: '',
    component: FrulistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrulistPageRoutingModule {}
