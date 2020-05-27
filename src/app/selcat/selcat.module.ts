import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelcatPageRoutingModule } from './selcat-routing.module';

import { SelcatPage } from './selcat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelcatPageRoutingModule
  ],
  declarations: [SelcatPage]
})
export class SelcatPageModule {}
