import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatspagePageRoutingModule } from './chatspage-routing.module';

import { ChatspagePage } from './chatspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatspagePageRoutingModule
  ],
  declarations: [ChatspagePage]
})
export class ChatspagePageModule {}
