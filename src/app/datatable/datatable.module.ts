import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxDatatableModule } from '@swimlane/ngx-datatable'

import { IonicModule } from '@ionic/angular';

import { DatatablePageRoutingModule } from './datatable-routing.module';

import { DatatablePage } from './datatable.page';

@NgModule({
  imports: [
    CommonModule,
     NgxDatatableModule,
    FormsModule,
    IonicModule,
    DatatablePageRoutingModule
  ],
  declarations: [DatatablePage]
})
export class DatatablePageModule {}
