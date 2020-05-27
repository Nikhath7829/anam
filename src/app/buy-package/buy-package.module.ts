import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyPackagePageRoutingModule } from './buy-package-routing.module';

import { BuyPackagePage } from './buy-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyPackagePageRoutingModule
  ],
  declarations: [BuyPackagePage]
})
export class BuyPackagePageModule {}
