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

  // constructor(
  //   _id?: string,
  //   name: string,
  //   email: string,
  //   phone.mobile: string,
  //   phone.work: string,
  //   address: string,
  //   city: string,
  //   state: string,
  //   zipcode: string
  // ) {
  //     this.content = content;
  //     this.username = username;
  //     this.messageId = messageId;
  //     this.userId = userId;
  // }
}
