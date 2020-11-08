import { Component, OnInit } from '@angular/core';

export interface ContactsData {
  contactId: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
