import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdssPage } from './adss.page';

const routes: Routes = [
  {
    path: '',
    component: AdssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdssPageRoutingModule {}
