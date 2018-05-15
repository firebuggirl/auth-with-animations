import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Contact } from './models/Contact';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  // GET ALL ContactS
  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/contact');
  }

  // GET A Contact
  getContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(`api/contact/${id}`);
  }

  // SAVE A Contact
  insertContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>('api/contact', contact);
  }

  // UPDATE A Contact
  updateContact(id: string, contact: Contact): Observable<void> {
    return this.http.put<void>(`api/contact/${id}`, contact);
  }

  // DELETE A Contact
  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`api/Contact/${id}`);
  }

}
