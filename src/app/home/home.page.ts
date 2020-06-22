import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
subscribe:any;
  constructor(public platform:Platform,public loadingController: LoadingController  ) { 
    this.subscribe= this.platform.backButton.subscribeWithPriority(666666,() =>{
if(this.constructor.name == "HomePage"){
  if(window.confirm("Do you want to exit the App"))
  {
    navigator["app"].exitApp();
  }
}




    })
    this.platform.ready().then(()=>{
      this.loadingController.create({
        message:"Please wait....",
        spinner:"lines-small"

      }).then((loadingElement)=>{
        loadingElement.present();
        var ref = this;
        setTimeout(function(){
ref.loadingController.dismiss();
        }, 5000)
      })
    })
  }




  ngOnInit() {
  }
  

}
