import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeglistPage } from './veglist.page';

const routes: Routes = [
  {
    path: '',
    component: VeglistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeglistPageRoutingModule {}
