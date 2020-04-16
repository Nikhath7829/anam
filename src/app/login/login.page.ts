import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formcontrol : FormGroup;
  valid: boolean = false;
  errmsg: any;

  constructor(private fb: FormBuilder,private myRoute: Router,) {
    this.formcontrol = this.fb.group({
      name: ["", []],
      number: ["", []]
    });
   }

  ngOnInit() {
  }
  login(){
    this.formcontrol.get("name").setValidators(Validators.required);
  this.formcontrol.get("name").updateValueAndValidity();
  this.formcontrol.get("number").setValidators(Validators.required);
  this.formcontrol.get("number").updateValueAndValidity();
  if (this.formcontrol.valid) {
    console.log("Form is valid");
  }
  else {
    this.valid=true;
    console.log("There is still an error in the form");
  }
 
  
  if (this.formcontrol.valid) {
    
if(this.formcontrol.get('name').value=="gngh@gmail.com" && this.formcontrol.get('number').value=="52000" ){

  this.myRoute.navigate(['/admindashboard']);
}
else{
  
this.errmsg=true;
alert('please insert valid credentails')
}
  }
  }
}
