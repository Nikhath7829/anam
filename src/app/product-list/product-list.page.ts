import { Component, OnInit ,ViewChild,} from '@angular/core';
import { RestService } from '../rest.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  arr;
  userid;
  listDatas;
  photo;
  tableStyle = 'bootstrap';
  isItemAvailables:boolean=true;
  isItemAvailable:boolean=true;

  listData;
 //listData: MatTableDataSource<any>;
  displayedColumns: string[] = [  'userId' ,'category','name', 'price', 'quant', 'desc', 'image'];
  content: any;
  constructor(public rest: RestService) { }
 

  ngOnInit() {
    this.retrieval();

    this.getuserDetails();
  }
  
 switchStyle(){
  if(this.tableStyle=='dark'){
    this.tableStyle='bootstrap';
console.log("kjkjkjkj");
  }else{
    this.tableStyle='dark';
  //  console.log("kjkjkjkj");  
  }
}

getItems(ev: any) {
  this.listDatas=this.listData;

const val = ev.target.value.toLowerCase();
if (val && val.trim() != ''){
  this.isItemAvailables = true;
  this.isItemAvailable = false;
this.listDatas= this.listData.filter((item => {
    return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    }
    )
  )

}
else{
  this.isItemAvailable=true;
  this.isItemAvailables=false;
}
}

  getuserDetails() {
    this.rest.userprofile().subscribe((result) => {
      if (result === undefined) {
        console.log(result);

      }
      else {
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[0].value;
        console.log(this.userid);

        this.photo = this.userid.photo;
      }
    }, (err) => {
      console.log(err);
    });
  }



  retrieval() {
    this.rest.getdashboardproduct().subscribe((result) => {
      if (result === undefined) {
        console.log(result);
      }
      else {
      
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.listData = this.arr[0].value;
        // this.listData = new MatTableDataSource(this.arr[1].value);
      }
    }, (err) => {
      console.log(err);
    });
  }
 


  doRefresh(event) {
    //console.log('Begin async operation');
    this.retrieval();
    this.getuserDetails();
    setTimeout(() => {
      //console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
