import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent implements OnInit {
  tCode:String = ""
  tName:String =""
  tImage:String=""
  tType:String=""
  tSize:String=""
  tThickness:String=""
  tQuantity:String=""
  tL:String=""
  tD:String=""
  hl1:String=""
  hl2:String=""
  hl3:String=""
  flour:String=""
  tWork:String=""
  tDiscripsion:String=""
  date:String=""
  userUniqueName:String=""
  batch:String=""

  lists:Array<any> =[]
  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
    this.getAllStocks()
  }

  getAllStocks(){
    this.vendorService.getAllStocks().subscribe(resp=>{
      console.log(resp);
      this.lists = resp.data
    })
  }

}
