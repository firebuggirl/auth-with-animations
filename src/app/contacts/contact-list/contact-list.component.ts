
import { Component, OnInit, Input } from '@angular/core';
//import { Contact } from '../contact';
import { Contact, ContactResponse } from '../../shared/interfaces';

//import { Contact, ContactResponse } from '../shared/interfaces';
import { ContactService } from '../contact.service';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
//import 'rxjs/add/operator/map';//Angular 5
import { map } from 'rxjs/operators';//Angular 6
import { Observable } from "rxjs";//Angular 6
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

(window as any).global = window;

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})


// @Injectable()
export class ContactListComponent implements OnInit {

  contactsUrl: string = '/api/contacts';
  contacts: Contact[];
  selectedContact: Contact;
  @Input() contact: Contact;



  // errorMessage: string;
  

  constructor(//private router: Router,
              //private route: ActivatedRoute,
              private contactService: ContactService,
              private location: Location) { }


  ngOnInit() {
    this.getContacts();

  }

  //
  getContacts(): void {
  this.contactService.getContacts()
  .subscribe(contacts => this.contacts = contacts);
}



  private getIndexOfContact = (contactId: String) => {
    return this.contacts.findIndex((contact) => {
      return contact._id === contactId;
    });
  }

selectContact(contact: Contact) {
  this.selectedContact = contact
}

createNewContact() {
  var contact: Contact = {
    name: '',
    email: '',
    phone: {
      work: '',
      mobile: ''
    },
    address: '',
    city: '',
    state: '',
    zipcode: ''

  };

  // By default, a newly-created contact will have the selected state.
  this.selectContact(contact);
}

deleteContact = (contactId: String) => {
  var idx = this.getIndexOfContact(contactId);
  if (idx !== -1) {
    this.contacts.splice(idx, 1);
    this.selectContact(null);
  }
  return this.contacts;
}


  addContact = (contact: Contact) => {
    this.contacts.push(contact);
    this.selectContact(contact);
    return this.contacts;
  }

  // updateContact = (contact: Contact) => {
  //   var idx = this.getIndexOfContact(this.contacts);
  //   if (idx !== -1) {
  //     this.contacts[idx] = contact;
  //     this.selectContact(contact);
  //   }
  //   return this.contacts;
  // }


  goBack(): void {
    this.location.back();
  }

  updateContact(): void {
    this.contactService.updateContact(this.contact)
      .subscribe(() => this.goBack());
  }



}
