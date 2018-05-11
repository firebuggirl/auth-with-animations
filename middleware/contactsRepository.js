const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Contact = require('../models/contacts');

class ContactsRepository {


  updateContact( body, callback, req) {
      console.log('*** ContactsRepository.editContact');

    //const id = {_id:req.params.id};
    // var id =
    //       {
    //       _id: req.params.id
    //       //slug: req.params.slug
    //     };


      Contact.findById( (err, contact)  => {
          if (err) {
              console.log(`*** ContactsRepository.editContact error: ${err}`);
              return callback(err);
          }


          // contact.name = body.name || contact.name;
          // contact.email = body.email || contact.email;
          // contact.phone.mobile = body.phone.mobile || contact.phone.mobile;
          // contact.phone.work = body.phone.work || contact.phone.work;
          // contact.address = body.address || contact.address;
          // contact.city = body.city || contact.city;
          // contact.state = body.state || body.state;
          // contact.zipcode = body.zip || contact.zipcode;

          const name = req.body.name;
           const email = req.body.email;
           const address = req.body.address;
           const city = req.body.city;
           const state = req.body.state;
           const zipcode = req.body.zipcode;
           const workphone = req.body.phone.work;
           const mobilephone = req.body.phone.mobile;

          const updateAll =  { $set:
                {
                  name: name,
                  email:email,
                 workphone: workphone,
                  mobilephone: mobilephone,
                  address: address,
                  city: city,
                  state: state,
                  zipcode: zipcode

                }
             };



          contact.save((err, updateAll, contact) => {
              if (err) {
                  console.log(`*** ContactsRepository.updateContact error: ${err}`);
                  return callback(err, null);
              }

              callback(null, contact);
          });

      });
  }


    // delete a contact
    deleteContact(id, callback) {
        console.log('*** ContactsRepository.deleteContact');
        Contact.remove({ '_id': id }, (err, contact) => {
            if (err) {
                console.log(`*** ContactsRepository.deleteContact error: ${err}`);
                return callback(err, null);
            }
            callback(null, contact);
        });
    }

}

module.exports = new ContactsRepository();
