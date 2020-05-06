import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdspagePageRoutingModule } from './adspage-routing.module';

import { AdspagePage } from './adspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdspagePageRoutingModule
  ],
  declarations: [AdspagePage]
})
export class AdspagePageModule {}
