import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UppPageRoutingModule } from './upp-routing.module';

import { UppPage } from './upp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UppPageRoutingModule
  ],
  declarations: [UppPage]
})
export class UppPageModule {}
