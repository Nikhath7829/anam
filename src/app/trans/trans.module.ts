import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { TransPageRoutingModule } from './trans-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TransPage } from './trans.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    TransPageRoutingModule
  ],
  declarations: [TransPage]
})
export class TransPageModule {}
