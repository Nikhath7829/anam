import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerpopover',
  templateUrl: './registerpopover.page.html',
  styleUrls: ['./registerpopover.page.scss'],
})
export class RegisterpopoverPage implements OnInit {

  constructor(private popover:PopoverController,private route: Router) { }

  ngOnInit() {
  }
  Closepopover (){
    
    this.popover.dismiss();
    this.route.navigate[('/login')];
    
  }
}
