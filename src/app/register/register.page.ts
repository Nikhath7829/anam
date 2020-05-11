import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import  {RestService } from '../rest.service';
import { Router } from '@angular/router';
import {  AlertController,ModalController,PopoverController } from '@ionic/angular';
import {Register} from '../Model/class';
import { LoadingController } from '@ionic/angular';
import {NavController } from '@ionic/angular'

import { RegisterpopoverPage } from '../registerpopover/registerpopover.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public formcontrol : FormGroup;
  public formValid = true;
  showMsg: boolean = false;
  valid: boolean;
  flag: any;
  selectedFile: FileList;
  currentFileUpload: File;
  errmsg: any;
  public data: Register = new Register();
 // loadingCtrl: any;
  constructor(private popover:PopoverController, private navCtrl:NavController,public fb: FormBuilder,loadingCtrl  : LoadingController,
  private alertCtrl: AlertController,public rest: RestService, private myRoute: Router,private modalCtrl:ModalController) { 
  this.formcontrol = this.fb.group({
    fullname: ["", [Validators.required]],
  number: ["", [Validators.required]],
  photo: ["", [Validators.required]],
  roles: this.fb.array(['USER']),
   });
           
    }

  ngOnInit() {
    this.valid=false;
    this.errmsg=false;

  }

  upload() {
    
    this.currentFileUpload = this.selectedFile.item(0);
    this.rest.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('File is completely uploaded!');
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFile = undefined;
  }

  createpopover()
  {
    this.popover.create({component:RegisterpopoverPage,
   showBackdrop:false}).then((popoverElement)=>{
   popoverElement.present();
    
   })
 
  }
 
  
  async confirm() {
    let alert = await this.alertCtrl.create({
    message: ' Register Successfully',
      buttons: ['Click here to Login']
    });
    alert.present().then(() => {
      // this.navCtrl.navigateRoot("/login");
      this.modalCtrl.dismiss();

      
    });
  }

  keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

 
  selectFile(event) {
    this.selectedFile = event.target.files;
  }

  register(){
    this.formcontrol.get("fullname").setValidators(Validators.required);
    this.formcontrol.get("fullname").updateValueAndValidity();
     this.formcontrol.get("number").setValidators(Validators.required);
    this.formcontrol.get("number").updateValueAndValidity();
    this.formcontrol.get("photo").setValidators(Validators.required);
    this.formcontrol.get("photo").updateValueAndValidity();
    Object.assign(this.data, this.formcontrol.value);
      console.log(this.data);
  
     if (this.formcontrol.valid) {
        this.rest.Register(this.data).subscribe((result) => {   
         if(result === undefined)
            {
              console.log(result);
              this.errmsg=true;
            
            }
            
           else
            {
              this.formcontrol.reset();
              this.formcontrol = this.fb.group({
                fullname: ["", [Validators.required]],
                number: ["", [Validators.required]],
                photo: ["",Validators.required],
                 roles: this.fb.array(['USER']),
                     });
                     this.createpopover();
               }
           },(err) => {
           // err.status(200).send("Error -> " + err);
          // this.server=true;
            console.log(err);
        });
        }
else{
          this.valid=true;
        }
        
        }
    
  
  














}
