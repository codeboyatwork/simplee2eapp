import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { CustomersData } from './customers/customers.component';

@Injectable({
  providedIn: 'root'
})
export class HeroSearchService implements InMemoryDbService {

  
  constructor() { }
  
  createDb(){

    let  customers:CustomersData[]  =  [
      {id: '1',name: 'Raytheon',address: '514 W Superior St, Kokomo, IN',website: 'http://www.raytheon.com',creditLimit:'100'},
      {id: '2',name: 'Plains GP Holdings',address: '2515 Bloyd Ave, Indianapolis, IN',website: 'http://www.plainsallamerican.com',creditLimit:'100'},
      {id: '3',name: 'US Foods Holding',address: '8768 N State Rd 37, Bloomington, IN',website: 'http://www.usfoods.com',creditLimit:'100'},
      {id: '4',name: 'AbbVie',address: '6445 Bay Harbor Ln, Indianapolis, IN',website: 'http://www.abbvie.com',creditLimit:'100'},
      {id: '5',name: 'Centene',address: '4019 W 3Rd St, Bloomington, IN',website: 'http://www.centene.com',creditLimit:'100'}
    ];
 
    return {customers};
 
   }
}

