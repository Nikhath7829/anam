import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrayPageRoutingModule } from './array-routing.module';

import { ArrayPage } from './array.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrayPageRoutingModule
  ],
  declarations: [ArrayPage]
})
export class ArrayPageModule {}
