import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Register } from '../Model/class';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {
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
public data: Register = new Register();

  constructor( public rest: RestService) { }

  ngOnInit() {
    this.getuserprofiles();
  }
  doRefresh(event) {
    this.getuserprofiles();
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
