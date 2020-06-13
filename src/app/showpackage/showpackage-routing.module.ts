import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowpackagePage } from './showpackage.page';

const routes: Routes = [
  {
    path: '',
    component: ShowpackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowpackagePageRoutingModule {}
