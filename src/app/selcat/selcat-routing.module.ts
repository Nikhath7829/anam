import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelcatPage } from './selcat.page';

const routes: Routes = [
  {
    path: '',
    component: SelcatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelcatPageRoutingModule {}
