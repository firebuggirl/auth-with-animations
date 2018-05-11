import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from './contact';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ContactService {

  private contactsUrl = 'api/contacts';  // URL to web api
  private contactUrl = 'api/contacts/:id;'
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET contacts from the server */
  getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl)
      .pipe(
        tap(contacts => this.log(`fetched contacts`)),
        catchError(this.handleError('getContacts', []))
      );
  }

  /** GET contact by id. Return `undefined` when id not found */
  getContactNo404<Data>(id: number): Observable<Contact> {
    const url = `${this.contactUrl}/?id=${id}`;
    return this.http.get<Contact[]>(url)
      .pipe(
        map(contacts => contacts[0]), // returns a {0|1} element array
        tap(c => {
          const outcome = c ? `fetched` : `did not find`;
          this.log(`${outcome} contact id=${id}`);
        }),
        catchError(this.handleError<Contact>(`getContact id=${id}`))
      );
  }

  /** GET contact by id. Will 404 if id not found */
getContact(id: number): Observable<Contact> {
  const url = `${this.contactUrl}/${id}`;
  return this.http.get<Contact>(url).pipe(
    tap(_ => this.log(`fetched contact id=${id}`)),
    catchError(this.handleError<Contact>(`getContact id=${id}`))
  );
}


    addContact (contact: Contact): Observable<Contact> {
      return this.http.post<Contact>(this.contactsUrl, contact, httpOptions).pipe(
        tap((contact: Contact) => this.log(`added contact`)),
        catchError(this.handleError<Contact>('addContact'))
      );
    }

    updateContact (contact: Contact): Observable<any> {//SyntaxError: Unexpected token # in JSON at position 0
      return this.http.put<Contact>(this.contactsUrl + '/' + contact._id, contact).pipe(//http://localhost:7777/api/contacts/undefined
      //return this.http.put(this.contactsUrl, contact._id, httpOptions).pipe(
        tap(_ => this.log(`updated contact id=${contact._id}`)),
        catchError(this.handleError<any>('updateContact'))
      );
    }







    deleteContact (contact: Contact){//TypeError: _co.deleteContact is not a function..ContactDetailsComponent.html:43)
      //const id = contact._id;
      const url = `${this.contactsUrl}`;

      return this.http.delete<Contact>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted contact id=${contact}`)),
        catchError(this.handleError<Contact>('deleteContact'))
      );
    }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a contactService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ContactService: ' + message);
  }
}
