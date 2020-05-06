import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LangpagecomponentPageRoutingModule } from './langpagecomponent-routing.module';

import { LangpagecomponentPage } from './langpagecomponent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LangpagecomponentPageRoutingModule
  ],
  declarations: [LangpagecomponentPage]
})
export class LangpagecomponentPageModule {}
