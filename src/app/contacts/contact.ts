export class Contact {
  _id?: string;
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
