import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Plugins,CameraResultType,CameraSource } from '@capacitor/core';
@Component({
  selector: 'app-adss',
  templateUrl: './adss.page.html',
  styleUrls: ['./adss.page.scss'],
})
export class AdssPage implements OnInit {
image:SafeResourceUrl;
base64Data:any;
  constructor(private domsanitizer : DomSanitizer) { }

  ngOnInit() {
  }
//   takephoto()
//   {
// const  {Camera}  = Plugins;
// const result =   Camera.getPhoto({
// quality:50, 
// allowEditing:true,
// source :CameraSource.Camera,
// resultType : CameraResultType.DataUrl
// });
// this.image = this.domsanitizer.bypassSecurityTrustResourceUrl( result && result.base64Data,
// )



//   }
}
