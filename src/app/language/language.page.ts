import { Component, OnInit } from '@angular/core';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';
import {LanguageservicesService} from '../languageservices.service';
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  selected = '';
  selectedProduct= [
    
  ]
reverseGeocodingResults:string="";
  mobileDevice: string;
  constructor(private lngService:LanguageservicesService,public geolocation:Geolocation,public geocoder:NativeGeocoder,public platform:Platform) {
    // this.platform.ready().then(()=>{
    //   this.geolocation.getCurrentPosition().then((position)=>{
    //     var latitude = position.coords.latitude;
    //     var longitude = position.coords.longitude;
    //     this.ReverseGeocoding(latitude,longitude);

    //   })
      
    // })

    // if (this.platform.is('cordova')) {
    //  console.log('djfhdjf');
    // } else {
    //   console.log('Nikhath')
    // }
   
   }
//    ReverseGeocoding(latitude,longitude)
//    {
//      var options:NativeGeocoderOptions={
//        useLocale:true,
//        maxResults:1
//      }
//      this.geocoder.reverseGeocode(latitude,longitude,options).then((results)=>{
// this.reverseGeocodingResults= JSON.stringify(results[0]);
//      })
//    }

  ngOnInit() {
  }

}
