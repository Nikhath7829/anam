import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangpagecomponentPage } from './langpagecomponent.page';

const routes: Routes = [
  {
    path: '',
    component: LangpagecomponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LangpagecomponentPageRoutingModule {}
