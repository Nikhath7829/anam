import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginpopoverPageRoutingModule } from './loginpopover-routing.module';

import { LoginpopoverPage } from './loginpopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginpopoverPageRoutingModule
  ],
  declarations: [LoginpopoverPage]
})
export class LoginpopoverPageModule {}
