import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import  {RestService } from '../rest.service';
import { Router } from '@angular/router';
import {  AlertController,ModalController } from '@ionic/angular';
import {ForgotPassword} from '../Model/class';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  public formcontrol : FormGroup;
  public formValid = true;
  showMsg: boolean = false;
  valid: boolean;
  flag: any;
  errmsg: any;
  public data: ForgotPassword = new ForgotPassword();

  constructor(public fb: FormBuilder,
    private alertCtrl: AlertController,public rest: RestService, private myRoute: Router,private modalCtrl:ModalController) { 
      this.formcontrol = this.fb.group({
        
      number: ["", [Validators.required]]
     
       });
               
        
    }

  ngOnInit() {
    this.valid=false;
    this.errmsg=false;
  }

  async confirm() {
    let alert = await this.alertCtrl.create({
   
      message: ' Register Successfully',
      
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();

      
    });
  }
  updatepass(){
 
     this.formcontrol.get("number").setValidators(Validators.required);
    this.formcontrol.get("number").updateValueAndValidity();
    Object.assign(this.data, this.formcontrol.value);
      console.log(this.data);
  
     if (this.formcontrol.valid) {
        this.rest.forgot(this.data).subscribe((result) => {   
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
                 roles: this.fb.array(['USER']),
                     });
              this.confirm();
              this.myRoute.navigate(['/login']);
            }
            
          }, (err) => {
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