import { Component, OnInit } from '@angular/core';
import data from '../../assets/icon/company.json';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  private companies= data;
  customRowClass = false;
  row:any;
tableStyle = 'bootstrap';
  constructor() { 
    console.log(this.companies);
  }

  ngOnInit() {
  }
async open(row){
 // console.log(row);
}
getRowClass(){
  //console.log('class:', this.row);
  const isMale = this.row.gender == 'male';
  if(!this.customRowClass){
    return {};
  }
  return{
    'male-row':isMale,
    'female-row':!isMale
  }
}

switchStyle(){
  if(this.tableStyle=='dark'){
    this.tableStyle='bootstrap';

  }else{
    this.tableStyle='dark';
  }
}



}
