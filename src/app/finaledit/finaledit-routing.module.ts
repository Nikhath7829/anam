import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinaleditPage } from './finaledit.page';

const routes: Routes = [
  {
    path: '',
    component: FinaleditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinaleditPageRoutingModule {}
