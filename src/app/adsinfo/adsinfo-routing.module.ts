import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdsinfoPage } from './adsinfo.page';

const routes: Routes = [
  {
    path: '',
    component: AdsinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsinfoPageRoutingModule {}
