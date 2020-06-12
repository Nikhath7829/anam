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
import {LangpagecomponentPageModule } from './langpagecomponent/langpagecomponent.module';
import { IonicStorageModule } from '@ionic/storage';
//import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Camera,CameraOptions,PictureSourceType } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  SocketIoModule.forRoot(config),
    BrowserModule,
    IonicStorageModule.forRoot(),
    
    //WebView,
   
    LangpagecomponentPageModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
     
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    File,
 FilePath, 
    StatusBar,
    SplashScreen,
    SocialSharing,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeGeocoder,
   // Geolocation,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
