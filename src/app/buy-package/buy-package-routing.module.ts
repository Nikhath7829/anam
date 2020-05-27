import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyPackagePage } from './buy-package.page';

const routes: Routes = [
  {
    path: '',
    component: BuyPackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyPackagePageRoutingModule {}
