import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  //options: GeolocationOptions;
 // currentPos: Geoposition;
  //@ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, private geolocation: Geolocation) { }
  // ionViewDidEnter() {
  //   this.getUserPosition();
  // }
  ngOnInit() {
  }
//   getUserPosition() {
//     this.options = {
//       enableHighAccuracy: false
//     };
//     this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
// this.currentPos = pos;
// console.log(pos);
//   this.addMap(pos.coords.latitude, pos.coords.longitude);
//  }, (err: PositionError) => {
//       console.log("error : " + err.message);
//       ;
//     })
//   }
//   addMap(lat, long) {

//     let latLng = new google.maps.LatLng(lat, long);

//     let mapOptions = {
//       center: latLng,
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     }

//     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//     this.addMarker();

//   }

//   addMarker() {

//     let marker = new google.maps.Marker({
//       map: this.map,
//       animation: google.maps.Animation.DROP,
//       position: this.map.getCenter()
//     });

//     let content = "<p>This is your current position !</p>";
//     let infoWindow = new google.maps.InfoWindow({
//       content: content
//     });

//     google.maps.event.addListener(marker, 'click', () => {
//       infoWindow.open(this.map, marker);
//     });

//   }
}
