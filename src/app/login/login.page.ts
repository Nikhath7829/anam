import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController,PopoverController } from '@ionic/angular';
import { RestService } from '../rest.service';
import {Login} from '../Model/class';
import { LoginpopoverPage } from '../loginpopover/loginpopover.page';
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
  constructor(private popover:PopoverController, private fb: FormBuilder,private alertCtrl: AlertController,
    public rest: RestService, private myRoute: Router,) {
    this.formcontrol = this.fb.group({
      fullname: ["",],
      number: ["", []],
      
    });
   }

  ngOnInit() {
  }
  createpopover()
  {
    this.popover.create({component:LoginpopoverPage,
   showBackdrop:false}).then((popoverElement)=>{
   popoverElement.present();
   
   })
 
  }
  async confirm() {
    let alert = await this.alertCtrl.create({
      message: 'Successfully Logged In',
      buttons: ['OK']
    });
    alert.present();
  }

  login(){
    
  this.formcontrol.get("number").setValidators(Validators.required);
  this.formcontrol.get("number").updateValueAndValidity();
  if (this.formcontrol.valid) {
    console.log("Form is valid");
  }
  else {
    this.valid=true;
    alert('Please enter the fields');
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
       //this.createpopover();
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

