import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-surat',
  templateUrl: './surat.page.html',
  styleUrls: ['./surat.page.scss'],
})
export class SuratPage implements OnInit {
  imgurl;

  constructor(private camera:Camera) { }

  ngOnInit() {
  }
  getCamera(){
    this.camera.getPicture({
      sourceType:this.camera.PictureSourceType.CAMERA,
      destinationType:this.camera.DestinationType.FILE_URI
    }).then((res) =>{
this.imgurl = res;
    }).catch(e => {
      console.log(e);
    })

  }
  getGallery(){
    this.camera.getPicture({
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType:this.camera.DestinationType.DATA_URL

    }).then((res) =>{
      this.imgurl = 'data:image/jpeg;base64,' + res;
          }).catch(e => {
            console.log(e);
          })
  }
}
