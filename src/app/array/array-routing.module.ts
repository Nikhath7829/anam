import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrayPage } from './array.page';

const routes: Routes = [
  {
    path: '',
    component: ArrayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrayPageRoutingModule {}
