import { Component, OnInit, ViewChild } from "@angular/core";
import { AppService } from "./app.service";
//import { MatSort, MatTableDataSource } from "@angular/material";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "MobileList";
  
  showTable: boolean;
  mobileList = [];
  deleteMessage: string;
  deleteModal: boolean;
  selectedItem: any;
  selectedItemName: any;
  sortByAsc: boolean = true;
  constructor(private AppService: AppService) {}
  resData;
  ngOnInit() {
    this.AppService.getMobileList()
    .subscribe(res=>
      {
        this.resData=res;
        console.log(res);
      },err=>
      {
        console.log(err);
      })
    
  }
 
  
  deleteRow(id) {
   let pos = this.resData.indexOf(id);
   this.resData.splice(pos, 1);
  
  }
    sortTable1(parm) {
      this.resData.sort((a, b)=> {return a.mobId - b.mobId});
     }
    sortTable(parm) {
      if(this.sortByAsc == true) {
        this.sortByAsc = false;
        this.resData.sort((a, b) => {
         return a[parm].localeCompare(b[parm]);
        });
      } else {
        this.sortByAsc = true;
        this.resData.sort((a, b) => {
          return b[parm].localeCompare(a[parm]);
       });
     }
    }
    sortTable2()
    {
      this.resData.sort((a, b)=> {return a.mobPrice - b.mobPrice});
    }

  
}
