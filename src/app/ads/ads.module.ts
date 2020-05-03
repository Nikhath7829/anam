import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
// import { SuperTabsModule } from 'ionic2-super-tabs';
import { AdsPageRoutingModule } from './ads-routing.module';
import { AdsPage } from './ads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //SuperTabsModule,
    AdsPageRoutingModule
  ],
  declarations: [AdsPage]
})
export class AdsPageModule {}
