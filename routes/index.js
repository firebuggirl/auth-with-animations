'use strict';

require('dotenv').config({ path: __dirname + '/../variables.env' });
//const fs = require('fs');
const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');
const CONTACTS_COLLECTION = "contacts";
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const util = require('util');//for logging
//const cors = require('cors');
//const cookieParser = require('cookie-parser');
const contactsRepo = require('../middleware/contactsRepository');
const mongodb = require("mongodb");
const ObjectID = mongodb.ObjectID;

//mongoose.connect(process.env.LOCAL_DB || process.env.DATABASE);
mongoose.connect(process.env.LOCAL_DB);
//mongoose.connect(process.env.DATABASE);//mLab connection string
//mongoose.connect(process.env.DOCKER_DB);//for Docker development change `localhost`` to `mongodb` in connection string...needs to match name of image container!!!
mongoose.set('debug', true);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

const db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));





// router.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
 router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(cookieParser());




function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

// CONTACTS API ROUTES BELOW

router.get("/api/contacts", function(req, res) {
  db.collection('contacts').find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

router.post("/api/contacts", function(req, res) {
  let newContact = req.body;


  newContact.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  db.collection('contacts').insertOne(newContact, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

router.get("/api/contacts/:id", function(req, res) {
  const contactid = req.params.contactid;

  db.collection('contacts').findOne( { '_id': id }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get contact");
    } else {
      res.status(200).json(doc);
      console.log(contactid);
    }
  });
});


router.put("/api/contacts/:id", function(req, res, next) {

      console.log(req.body);


              contactsRepo.updateContact(req.params.id, req.body, (err, contact) => {
              //contactsRepo.updateContact( (err, contact) => {
                  if (err) {
                      console.log('*** updateContact error: ' + util.inspect(err));
                      res.json({ status: false, error: 'Update failed', contact: null });
                  } else {
                      console.log('*** updateContact ok');
                      res.json({ status: true, error: null, contact: contact });
                  }
              });

  

});

router.delete('api/contacts/:id', function(req, res) {

  //  console.log('*** deleteContact');

    // contactsRepo.deleteContact(req.params.id, (err) => {
    //     if (err) {
    //         console.log('*** deleteContact error: ' + util.inspect(err));
    //         res.json({ status: false });
    //     } else {
    //         console.log('*** deleteContact ok');
    //         res.json({ status: true });
    //     }
    // });

  // function deleteContact(id, callback) {
  //       console.log('*** ContactsRepository.deleteContact');
  //       Contact.remove({ '_id': id }, (err, contact) => {
  //           if (err) {
  //               console.log(`*** ContactsRepository.deleteContact error: ${err}`);
  //               return callback(err, null);
  //           }
  //           callback(null, contact);
  //       });
  //
  Contact.findById(req.params.id, function (err, contact) {
   if (err) {
       return res.status(500).json({
           title: 'An error occurred',
           error: err
       });
   }
   if (!contact) {
       return res.status(500).json({
           title: 'No Contact Found!',
           error: {mesage: 'Contact not found'}
       });
   }

   contact.remove(function (err, result) {
       if (err) {
           return res.status(500).json({
               title: 'An error occurred',
               error: err
           });
       }
       res.status(200).json({
           message: 'Deleted contact',
           obj: result////this ties messages service from Angular/front end in with backend DB
       });
   });
});
  //  }

//db.collection('contacts').deleteContact();
//const contactid = req.params.contactid;
  // db.collection('contacts').deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
  //   if (err) {
  //     handleError(res, err.message, 'Failed to delete contact');
  //   } else {
  //     //res.status(200).json(req.params.id);
  //     res.status(200).json(result);
  //   }
  // });



});


module.exports = router;
