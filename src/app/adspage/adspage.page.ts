import { Component, OnInit } from '@angular/core';
import { Plugins,CameraResultType,CameraSource } from '@capacitor/core';
@Component({
  selector: 'app-adspage',
  templateUrl: './adspage.page.html',
  styleUrls: ['./adspage.page.scss'],
})
export class AdspagePage implements OnInit {
  selectTabs = 'ADS';
  constructor() { }

  ngOnInit() {
  }
  takephoto()
  {
const  {Camera}  = Plugins;
const result =   Camera.getPhoto({
quality:50, 
allowEditing:true,
source :CameraSource.Camera,
resultType : CameraResultType.DataUrl
});
//this.image = this.domsanitizer.bypassSecurityTrustResourceUrl( result && result.base64Data,)



  }

}
