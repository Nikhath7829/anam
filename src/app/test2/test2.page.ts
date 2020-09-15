import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit {
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy:number;
  geoAddress: string;
  userlocation:any;
  watchLocationUpdates:any; 
  loading:any;
  isWatching:boolean;
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor( private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
  }

  getUserLocation(){
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.geolocation.getCurrentPosition().then(resp => {
      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
        .then((result: NativeGeocoderResult[]) => {
          this.userlocation = result[0].toString();
        }, error => {
          console.log(error)
        });
    }, error => {
      console.log('Error getting location', error);
    })
  }

  //Get current coordinates of device
  // getGeolocation(){
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     this.geoLatitude = resp.coords.latitude;
  //     this.geoLongitude = resp.coords.longitude; 
  //     this.geoAccuracy = resp.coords.accuracy; 
  //     this.getGeoencoder(this.geoLatitude,this.geoLongitude);
  //    }).catch((error) => {
  //      alert('Error getting location'+ JSON.stringify(error));
  //    });
  // }

  // //geocoder method to fetch address from coordinates passed as arguments
  // getGeoencoder(latitude,longitude){
  //   this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
  //   .then((result: NativeGeocoderResult[]) => {
  //     this.geoAddress = this.generateAddress(result[0]);
  //   })
  //   .catch((error: any) => {
  //     alert('Error getting location'+ JSON.stringify(error));
  //   });
  // }

  // //Return Comma saperated address
  // generateAddress(addressObj){
  //     let obj = [];
  //     let address = "";
  //     for (let key in addressObj) {
  //       obj.push(addressObj[key]);
  //     }
  //     obj.reverse();
  //     for (let val in obj) {
  //       if(obj[val].length)
  //       address += obj[val]+', ';
  //     }
  //   return address.slice(0, -2);
  // }


  // //Start location update watch
  // watchLocation(){
  //   this.isWatching = true;
  //   this.watchLocationUpdates = this.geolocation.watchPosition();
  //   this.watchLocationUpdates.subscribe((resp) => {
  //     this.geoLatitude = resp.coords.latitude;
  //     this.geoLongitude = resp.coords.longitude; 
  //     this.getGeoencoder(this.geoLatitude,this.geoLongitude);
  //   });
  // }

  // //Stop location update watch
  // stopLocationWatch(){
  //   this.isWatching = false;
  //   this.watchLocationUpdates.unsubscribe();
  // }

}
