import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpopoverPage } from './loginpopover.page';

const routes: Routes = [
  {
    path: '',
    component: LoginpopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginpopoverPageRoutingModule {}
