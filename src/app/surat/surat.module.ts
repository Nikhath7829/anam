import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuratPageRoutingModule } from './surat-routing.module';

import { SuratPage } from './surat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuratPageRoutingModule
  ],
  declarations: [SuratPage]
})
export class SuratPageModule {}
