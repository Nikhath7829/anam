import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public platform:Platform,public loadingController: LoadingController  ) { 
    this.platform.ready().then(()=>{
      this.loadingController.create({
        message:"Please wait....",
        spinner:"dots"

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
