import { Component, Input, OnInit  } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { catchError, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/toPromise';
import { filter } from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})

export class ContactDetailsComponent implements OnInit{



  contactsUrl: string = '/api/contacts';

  @Input() contacts: Contact[];

  @Input() selectedContact: Contact;

  @Input()
  contact: Contact;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;
  errorMessage: string;

  constructor (  private router: Router,
                  private route: ActivatedRoute,
                  private contactService: ContactService,
                  private location: Location ) {}

        ngOnInit() {
              const id = this.route.snapshot.params['id'];
              if (id !== '0') {
                //this.operationText = 'Update';
                this.getContacts();
              }

              //this.getContact();
        }

        getContacts(): void {
        this.contactService.getContacts()
        .subscribe(contacts => this.contacts = contacts);
        }


    createContact(contact: Contact) {
      this.contactService.addContact(contact).subscribe((newContact: Contact) => {
        this.createHandler(newContact);
      });
    }
    goBack(): void {
      this.location.back();
    }



    private getIndexOfContact = (contactId: String) => {
      return this.contacts.findIndex((contact) => {
        return contact._id === contactId;
      });
    }


 updateContact(id: Contact): void {
     this.contactService.updateContact(id).subscribe((updatedContact: Contact) => {
       this.updateHandler(updatedContact);
     });
   }


}
