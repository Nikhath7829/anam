import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeglistPageRoutingModule } from './veglist-routing.module';

import { VeglistPage } from './veglist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeglistPageRoutingModule
  ],
  declarations: [VeglistPage]
})
export class VeglistPageModule {}
