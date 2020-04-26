import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinaleditPageRoutingModule } from './finaledit-routing.module';

import { FinaleditPage } from './finaledit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FinaleditPageRoutingModule
  ],
  declarations: [FinaleditPage]
})
export class FinaleditPageModule {}
