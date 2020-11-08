import { DialogBoxComponent } from './../dialog-box/dialog-box.component';
import { CustomerDataService } from './../customer-data.service';
import { HeroSearchService } from './../hero-search.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface CustomersData {
  id: string;
  name: string;
  address: string;
  website: string;
  creditLimit: string
}


const ELEMENT_DATA: CustomersData[] = [
  {id: '1',name: 'Raytheon',address: '514 W Superior St, Kokomo, IN',website: 'http://www.raytheon.com',creditLimit:'100'}
]
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public tableColumns  :  string[] = ['name', 'address', 'website','creditLimit'];
  public  :Object[] = ELEMENT_DATA;
  public dataSource = new MatTableDataSource<CustomersData>();
  selected = 'None';

  constructor(private customerDataService : CustomerDataService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.customerDataService.getCustomers().subscribe((data: CustomersData[])=> 
    {
      
      this.dataSource.data=data;
    })
    // this.dataSource.data =  ELEMENT_DATA; //add the data source code
  }

  ngAfterViewInit(): void {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator = this.paginator;
    
    
  }
  public doFilter = (value: string) => {
    console.log("in the dofilter method");
    this.dataSource.filter = value.trim().toLowerCase();    
  }
  public onChange = (value: string) => {
    console.log("in the onchange method");
    if(this.selected=='name')
    // this.dataSource.filterPredicate = (data:CustomersData,filter:string) => !filter||data.name.includes(filter);
    this.dataSource.filterPredicate = (data:CustomersData,filter:string) => data.name.trim().toLowerCase().indexOf(filter) !== -1;
    else if(this.selected=='address')
    this.dataSource.filterPredicate = (data:CustomersData,filter:string) => data.address.trim().toLowerCase().indexOf(filter) !== -1;
    else if(this.selected=='creditLimit')
    this.dataSource.filterPredicate = (data:CustomersData,filter:string) => data.creditLimit.trim().toLowerCase().indexOf(filter) !== -1;
    else if(this.selected=='website')
    this.dataSource.filterPredicate = (data:CustomersData,filter:string) => data.website.trim().toLowerCase().indexOf(filter) !== -1;
    else 
    this.dataSource.filterPredicate = (data:CustomersData,filter:string) => !filter||data.name.trim().toLowerCase().indexOf(filter) !== -1||data.address.trim().toLowerCase().indexOf(filter) !== -1||data.creditLimit.trim().toLowerCase().indexOf(filter) !== -1||data.website.trim().toLowerCase().indexOf(filter) !== -1;
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });
/*
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });*/
  }
/*
  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
*/
}
