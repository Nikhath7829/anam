import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsinfoPageRoutingModule } from './adsinfo-routing.module';

import { AdsinfoPage } from './adsinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdsinfoPageRoutingModule
  ],
  declarations: [AdsinfoPage]
})
export class AdsinfoPageModule {}
