import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-adspage',
  templateUrl: './adspage.page.html',
  styleUrls: ['./adspage.page.scss'],
})
export class AdspagePage implements OnInit {
  selectTabs = 'ADS';
  myphoto: any;
  constructor(private camera: Camera) { }

  ngOnInit() {
  }
  getcamera() {
    const options: CameraOptions = {
          quality: 70,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((ImageData) => {
    
          this.myphoto = 'data:image/jpeg;base64,' + ImageData;
        }, (err) => {
          //Handle error
        });
      }
}
