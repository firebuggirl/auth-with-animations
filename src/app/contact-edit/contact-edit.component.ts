import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-Contact-edit',
  templateUrl: './Contact-edit.component.html',
  styles: []
})
export class ContactEditComponent implements OnInit {

  contact: any;

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    this.getContactDetails(this.route.snapshot.params['id']);
  }

  getContactDetails(id: string) {
    this.contactService.getContact(id)
      .subscribe((data: Contact) => this.contact = data);
  }

  updateContact(id: string) {
    this.contactService.updateContact(id, this.contact)
      .subscribe((res: void) => this.router.navigate(['/contacts']), (err) => console.log(err));
  }

}
