import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuratPage } from './surat.page';

const routes: Routes = [
  {
    path: '',
    component: SuratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuratPageRoutingModule {}
