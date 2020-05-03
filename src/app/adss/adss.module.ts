import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdssPageRoutingModule } from './adss-routing.module';

import { AdssPage } from './adss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdssPageRoutingModule
  ],
  declarations: [AdssPage]
})
export class AdssPageModule {}
