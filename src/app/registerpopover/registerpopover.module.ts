import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterpopoverPageRoutingModule } from './registerpopover-routing.module';

import { RegisterpopoverPage } from './registerpopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterpopoverPageRoutingModule
  ],
  declarations: [RegisterpopoverPage]
})
export class RegisterpopoverPageModule {}
