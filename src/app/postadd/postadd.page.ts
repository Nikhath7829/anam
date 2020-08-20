import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {AdsInfo} from '../Model/class';
import {RestService } from '../rest.service';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-postadd',
  templateUrl: './postadd.page.html',
  styleUrls: ['./postadd.page.scss'],
})
export class PostaddPage implements OnInit {
  public formcontrol: FormGroup;
  public formValid = true;
  today = Date.now();
 myphoto: any;
 demo:any= {};
  constructor(private fb: FormBuilder,private route:ActivatedRoute,
private camera: Camera) { 
     this.route.queryParams.subscribe(res =>{
       console.log(res);
       this.demo=res;
     });
     this.formcontrol = this.fb.group({
      postadname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'),(Validators.maxLength(20)), ]],
      postadprice: ['', [Validators.required, ]],
      postadquant: ['', [Validators.required, ]],
      postaddesc: ['', [Validators.required, ]],
      roles: this.fb.array(['USER'])
    });
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
  
  
  ngOnInit() {
  }
 
}
