import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrulistPageRoutingModule } from './frulist-routing.module';

import { FrulistPage } from './frulist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrulistPageRoutingModule
  ],
  declarations: [FrulistPage]
})
export class FrulistPageModule {}
