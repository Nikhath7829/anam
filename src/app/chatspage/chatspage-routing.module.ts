import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatspagePage } from './chatspage.page';

const routes: Routes = [
  {
    path: '',
    component: ChatspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatspagePageRoutingModule {}
