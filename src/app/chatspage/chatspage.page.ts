import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-chatspage',
  templateUrl: './chatspage.page.html',
  styleUrls: ['./chatspage.page.scss'],
})
export class ChatspagePage implements OnInit {
  selectTabs = 'ALL';
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
