import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { IonicModule } from '@ionic/angular';

import { RegisteruserPageRoutingModule } from './registeruser-routing.module';

import { RegisteruserPage } from './registeruser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    RegisteruserPageRoutingModule
  ],
  declarations: [RegisteruserPage]
})
export class RegisteruserPageModule {}
