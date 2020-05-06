import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdspagePage } from './adspage.page';

const routes: Routes = [
  {
    path: '',
    component: AdspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdspagePageRoutingModule {}
