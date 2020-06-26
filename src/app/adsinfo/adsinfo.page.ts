import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {AdsInfo} from '../Model/class';
import {RestService } from '../rest.service';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-adsinfo',
  templateUrl: './adsinfo.page.html',
  styleUrls: ['./adsinfo.page.scss'],
})
export class AdsinfoPage implements OnInit {
  public formcontrol : FormGroup;
   public data: AdsInfo = new AdsInfo();
   
  valid: boolean = false;
  errmsg: any;
  showMsg: any;
  formValid: any;
  myphoto: any;
  constructor(private fb: FormBuilder,
    private rest: RestService, 
    public alertController: AlertController,
    private camera: Camera) { 
    this.formcontrol = this.fb.group({
      proname: ["",],
      protitle: ["", []],
      proprice: ["", []],
      prokgs: ["", []],
     // proimage:["", []]
    
    });
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      subHeader: 'Alert:',
      message: 'Please Confirm Before Posting.',
      buttons: ['OK']
    });
    await alert.present();
  }


  keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  ngOnInit() {
  }
  getimage(){
    
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
   sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false,
      allowEdit:true,
      targetWidth:300,
targetHeight:300
    }
    this.camera.getPicture(options).then((ImageData)=>{
    
      this.myphoto= 'data:image/jpeg;base64,' + ImageData;
  }, (err) => {
    //Handle error
  });
  }


  
ff(){
  this.formcontrol.get("proname").setValidators(Validators.required);
  this.formcontrol.get("proname").updateValueAndValidity();
  this.formcontrol.get("protitle").setValidators(Validators.required);
  this.formcontrol.get("protitle").updateValueAndValidity();
  this.formcontrol.get("proprice").setValidators(Validators.required);
  this.formcontrol.get("proprice").updateValueAndValidity();
  this.formcontrol.get("prokgs").setValidators(Validators.required);
  this.formcontrol.get("prokgs").updateValueAndValidity();
  // this.formcontrol.get("proimage").setValidators(Validators.required);
  // this.formcontrol.get("proimage").updateValueAndValidity();
  if (this.formcontrol.valid) {
    console.log("Form is valid");
  }
  else {
    console.log('error');
    this.valid = true;
  }

  Object.assign(this.data, this.formcontrol.value);
  console.log(this.data);
  if (this.formcontrol.valid) {
    this.rest.AdsInfo(this.data).subscribe((result) => {
      
      console.log(result);
      if (result === undefined) {
        console.log(result);
      }
      else {
        this.presentAlert();
        this.formcontrol.reset();
        this.formcontrol = this.fb.group({
          proname: ['', [Validators.required]],
          protitle: ['', Validators.required],
          proprice: ['', Validators.required],
          prokgs: ['', Validators.required],
         userId: this.rest.getId()
        });
      }
    }, (err) => {
      console.log(err);
    });
  }
  else {
    alert("something Went Wrong");

  }








 
  }

}
