import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterpopoverPage } from './registerpopover.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterpopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterpopoverPageRoutingModule {}
