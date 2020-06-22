import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController,PopoverController } from '@ionic/angular';
import { RestService } from '../rest.service';
import {Login} from '../Model/class';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formcontrol : FormGroup;
  public data: Login = new Login();
  valid: boolean = false;
  errmsg: any;
  showMsg: any;
  formValid: any;
   server: any;
  constructor(private popover:PopoverController, private loadingCtrl  : LoadingController,private fb: FormBuilder,private alertCtrl: AlertController,
    public rest: RestService, private myRoute: Router,) {
    this.formcontrol = this.fb.group({
      fullname: ["",],
      number: ["", []],
    });
   }

  ngOnInit() {
  }
  async createLoader(){
    let loading = await this.loadingCtrl.create({
      message:"Logging In",
      duration:1000,
      showBackdrop:false,
      spinner:"lines-small"
      });
      loading.present();
      setTimeout(()=>{
        loading.dismiss();
      },2000)
     // this.myRoute.navigate(["/dashboard"]);
    
    
     }

  
  login(){
    // this.formcontrol.get("fullname").setValidators(Validators.required);
    // this.formcontrol.get("fullname").updateValueAndValidity();
  this.formcontrol.get("number").setValidators(Validators.required);
  this.formcontrol.get("number").updateValueAndValidity();
  if (this.formcontrol.valid) {
    console.log("Form is valid");
  }
  else {
    this.valid=true;
    alert('We found with empty records');
  }
 
  Object.assign(this.data, this.formcontrol.value);
  console.log(this.data);
  this.formValid = true;
 
  if (this.formValid) {
    this.rest.login(this.data).subscribe((result) => {
      console.log(result);
      if (result === undefined) {
        this.showMsg = true;
        console.log(result);
        this.errmsg = true;
      }
      else {
    this.createLoader();
        this.rest.sendToken(result.accessToken);
        this.myRoute.navigate(['/dashboard']);
        this.formcontrol.reset();
      }
    }, (err) => {
      this.showMsg = true;
      console.log(err);
    });
  }
  else {
    alert("Something went wrong");
  }
}
  
  }

