import { Component, OnInit } from '@angular/core';
import { Plugins,CameraResultType,CameraSource } from '@capacitor/core';
@Component({
  selector: 'app-adspage',
  templateUrl: './adspage.page.html',
  styleUrls: ['./adspage.page.scss'],
})
export class AdspagePage implements OnInit {
  selectTabs = 'ADS';
  constructor() { }

  ngOnInit() {
  }
 
}
