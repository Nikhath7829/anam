import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {File} from '@ionic-native/file/ngx';
import {LanguagesComponent} from './languages/languages.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Globalization } from '@ionic-native/globalization/ngx';
// import {NavParams} from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

const config: SocketIoConfig = { url: 'http://ec2-18-141-240-226.ap-southeast-1.compute.amazonaws.com:3000', options: {} };
@NgModule({
  declarations: [AppComponent,LanguagesComponent],
  entryComponents: [LanguagesComponent],
  imports: [
  SocketIoModule.forRoot(config),
    BrowserModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
     IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
 // NavParams,
    StatusBar,
    SplashScreen,
    SocialSharing,
    ImagePicker,
    Camera,
    Globalization,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeGeocoder,
   
    File,

    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
