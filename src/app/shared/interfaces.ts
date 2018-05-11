
import { Contact } from '../contacts/contact';

export interface Contact {
  _id?: string;
  //contactId?: string;
  name: string;
  email: string;
  phone: {
    mobile: string;
    work: string;
  };
  address: string;
  city: string;
  state: string;
  zipcode: string;


}
export interface ContactResponse {
    contact: Contact;
    status: boolean;
    error: string;
}
