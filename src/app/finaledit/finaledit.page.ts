import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RestService } from '../rest.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { Register } from '../Model/class';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {File} from '@ionic-native/file/ngx';
import { UserprofilePage } from '../userprofile/userprofile.page';

@Component({
  selector: 'app-finaledit',
  templateUrl: './finaledit.page.html',
  styleUrls: ['./finaledit.page.scss'],
})
export class FinaleditPage implements OnInit {
  images:any=[];
  myphoto:any;
  public formcontrol:FormGroup;
  valid: boolean = false;
  selectedFiles: FileList;
  currentFileUpload: File;
  public data:Register = new Register();
  userid;
  arr;
  imageUrl:File;
  image: any;
  errmsg: boolean = false;
  ar;
  role;
  number;
  admin: boolean = false;
  user: boolean = false;
  name;
  fullname;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private fb:FormBuilder
    ,private rest:RestService,
    private camera: Camera
   
    ) { }

  ngOnInit() {
    this.vali();
    this.getuserprofiles()
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
  




  vali(){
    this.formcontrol = this.fb.group({
      fullname: ["", [Validators.required]],
      number: ["", [Validators.required]],
    
       });
  }

 
  getuserprofiles() {
    this.rest.userprofile().subscribe((result) => {
      if (result === undefined) {
        console.log(result);
        this.errmsg = true;
      }
      else {
        /* to get userdetails */

        console.log(result);  
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[1].value;
        this.rest.sendId(this.userid.id);
        this.name = this.userid.fullname;
        console.log(this.name);
        this.number = this.userid.number;
        console.log(this.number);

        //console.log(this.userid.name);
        /* to get role of user */
        this.ar = Object.entries(this.userid.roles).map(([type, value]) => ({ type, value }));
        this.role = this.ar[0].value;
        this.rest.sendRole(this.role.name);
        /* Role Differntiation */
        if (this.rest.getRole() == "ADMIN") {
          
          this.admin=true;
        }
        else {
          // this.test.getuserprofile();
          // this.test.getuserDetails();
         this.user=true;
        }
      }
    }, (err) => {
      console.log(err);
  
    });
  }

  update(){

    this.formcontrol.get("number").setValidators(Validators.required);
    this.formcontrol.get("number").updateValueAndValidity();
    this.formcontrol.get("fullname").setValidators(Validators.required);
    this.formcontrol.get("fullname").updateValueAndValidity();
  
    
    if (this.formcontrol.valid) {
      console.log('no error');
    }
    else {
      console.log('error');
      this.valid = true;
    }
    Object.assign(this.data, this.formcontrol.value);
    console.log(this.data);
    if (this.formcontrol.valid) {
      this.rest.UpdateRegister(this.data).subscribe((result) => {
       // this.upload();
        console.log(result);
        if (result === undefined) {
          console.log(result);  
        }
        else {
          //this.presentAlert();
          this.formcontrol.reset();
         
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
