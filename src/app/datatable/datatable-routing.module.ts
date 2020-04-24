import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatatablePage } from './datatable.page';

const routes: Routes = [
  {
    path: '',
    component: DatatablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatatablePageRoutingModule {}
