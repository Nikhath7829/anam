import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LangComponent  } from './lang/lang.component'; 
//import { SuperTabsModule } from 'ionic2-super-tabs';

import {RegisterpopoverPageModule} from './registerpopover/registerpopover.module';
import {LoginpopoverPageModule} from './loginpopover/loginpopover.module'
@NgModule({
  declarations: [AppComponent,LangComponent],
  entryComponents: [LangComponent],
  imports: [
    BrowserModule,
    
    LoginpopoverPageModule,
    RegisterpopoverPageModule,
    //SuperTabsModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
