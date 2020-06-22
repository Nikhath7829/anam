import { Component, OnInit } from '@angular/core';
import {RestService } from '../rest.service';
import { Login } from '../Model/class';
import { MatTableDataSource } from '@angular/material';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.page.html',
  styleUrls: ['./registeruser.page.scss'],
})
export class RegisteruserPage implements OnInit {
  arr;
  value: any[];
  userid;
  listDatas;
  listData;
  isItemAvailable:boolean=false;
  isItemAvailables:boolean=false;
  scrollTo
  public data: Login = new Login();
  displayedColumns: string[] = ['id','fullname','number','delete'];
  //listData: MatTableDataSource<any>;
  constructor(public rest: RestService,public toastController: ToastController) { 
   
  }

  ngOnInit() {
   this.retrieval();

    // this.isItemAvailable=true;
   this.isItemAvailables=true;
  }

  getItems(ev: any) {
    this.listDatas=this.listData;
 console.log(this.listData);
  const val = ev.target.value.toLowerCase();
  if (val && val.trim() != ''){
    this.isItemAvailables = true;
    this.isItemAvailable = false;
  this.listDatas= this.listData.filter((item => {
      return (item.fullname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }
      )
    )

  }
  else{
    this.isItemAvailable=true;
    this.isItemAvailables=false;
  }
}
  async presentToast() {
    const toast = await this.toastController.create({
      message: "User  removed Successfully",
      cssClass: "toast-scheme ",
    
     
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

 doRefresh(event) {
    this.getuserDetails();
   this.retrieval();
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
        this.presentToast();
      }
    }, (err) => {
      console.log(err);
    });
  }



}
