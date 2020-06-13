import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowpackagePageRoutingModule } from './showpackage-routing.module';

import { ShowpackagePage } from './showpackage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowpackagePageRoutingModule
  ],
  declarations: [ShowpackagePage]
})
export class ShowpackagePageModule {}
