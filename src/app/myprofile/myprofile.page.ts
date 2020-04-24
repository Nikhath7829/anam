import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Register } from '../Model/class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
fullname;
number;
errmsg:boolean=false;
array;
role;
userid;
arr;
name;
ar;
admin: boolean = false;
user: boolean = false;
public formcontrol: FormGroup;
public data: Register = new Register();

  constructor(private fb: FormBuilder, public rest: RestService) { 
    this.formcontrol = this.fb.group({
      fullname: ['', Validators.required],
    });
  
  }

  ngOnInit() {
  }
  doRefresh(event) {
    this.getuserprofiles()
 
     //console.log('Begin async operation');

    setTimeout(() => {
       //console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getuserprofiles() {
    this.rest.userprofile().subscribe((result) => {
      if (result === undefined) {
        console.log(result);
        this.errmsg = true;
      }
      else {
        /* to get userdetails */
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[1].value;
        this.rest.sendId(this.userid.id);
        this.name = this.userid.fullname;
     
        this.number = this.userid.number;
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
  
  
  

}
