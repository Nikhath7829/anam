import { Component, OnInit } from '@angular/core';
import {RestService } from '../rest.service';
import { Login } from '../Model/class';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.page.html',
  styleUrls: ['./registeruser.page.scss'],
})
export class RegisteruserPage implements OnInit {
  arr;
  userid;
  public data: Login = new Login();
  displayedColumns: string[] = ['id','fullname','number','delete'];
  listData: MatTableDataSource<any>;
  constructor(public rest: RestService) { }

  ngOnInit() {
  }


  doRefresh(event) {

    this.getuserDetails();
  
   setTimeout(() => {
      
     event.target.complete();
   }, 2000);
 }
  retrieval() { 
    this.rest.getuserlist().subscribe((result) => {
      if (result === undefined) {
        console.log(result);
      }
      else {
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.listData = this.arr[0].value;
        this.listData = new MatTableDataSource(this.arr[1].value);
      }
    }, (err) => {
      console.log(err);
    });
  }

  getuserDetails() {
    this.rest.userprofile().subscribe((result) => {
      if (result === undefined) {
        console.log(result);
       
      }
      else {
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[0].value;
        // console.log(this.userid);
      
       
      }
    }, (err) => {
      console.log(err);
    });
  }
  delete(id) {
    this.rest.removefromlist(id).subscribe((result) => {
      if (result == undefined) {
        console.log(result);
      }
      else {
      this.getuserDetails();
      this.retrieval();
        //console.log(result);
      }
    }, (err) => {
      console.log(err);
    });
  }

}
