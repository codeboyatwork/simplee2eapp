import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  SERVER_URL: string = "http://192.168.1.4:8080/simple-e2e-backend-app/api/v1/";
  // SERVER_URL: string = "http://localhost:8081/simple-e2e-backend-app/api/v1/";
  // SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getContacts(): Observable<any>{ 
    return this.httpClient.get(this.SERVER_URL + 'contacts');
}

public getCustomer(contactid){ 
  return this.httpClient.get(`${this.SERVER_URL + 'contacts'}/${contactid}`);
}

createEmployee(contact: CustomersData): Observable<Object> {
  return this.httpClient.post(`${this.SERVER_URL}`, customer);
}

updateEmployee(id: number, value: any): Observable<Object> {
  return this.httpClient.put(`${this.SERVER_URL}/${id}`, value);
}

deleteEmployee(id: number): Observable<any> {
  return this.httpClient.delete(`${this.SERVER_URL}/${id}`, { responseType: 'text' });
}
}
