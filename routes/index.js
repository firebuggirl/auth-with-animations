require('dotenv').config({ path: __dirname + '/../variables.env' });
//const fs = require('fs');
const express = require('express');
const router = express.Router();
const CONTACTS_COLLECTION = "contacts";
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
//const cors = require('cors');
//const cookieParser = require('cookie-parser');

const mongodb = require("mongodb");
const ObjectID = mongodb.ObjectID;

//mongoose.connect(process.env.LOCAL_DB || process.env.DATABASE);
mongoose.connect(process.env.DATABASE);
mongoose.set('debug', true);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

var db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

const Contact = require('../models/contacts');



// router.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
 router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(cookieParser());


// router.use(function (req, res, next) {
//    res.locals.currentContact = req.session.contactId;
//    next();
//  });

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
  var newContact = req.body;
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

  db.collection('contacts').findOne( contactid , function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get contact");
    } else {
      res.status(200).json(doc);
      console.log(contactid);
    }
  });
});


router.put("/api/contacts/:id", function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;

  // delete name._id;
  // delete email._id;
  // delete address._id;

  const updateAll =  { $set:
      {
        name: name,
        email:email,
       "phone.work": req.body.phone.work,
       "phone.mobile": req.body.phone.mobile,
        address: address,
        city: city,
        state: state,
        zipcode: zipcode

      }
   };

  db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateAll, function(err, doc) {
    if (err) {
      res.send(err);
        } else {

       [name._id, email._id] = req.params.id;
       var returnObj = [name, email, address];

       res.status(200).json(returnObj);
      }
  });


});

router.delete("/api/contacts/:id", function(req, res) {

  const contactid = req.params.contactid;

  db.collection('contacts').deleteOne(contactid, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete contact");
    } else {
      //res.status(200).json(req.params.id);
      res.status(200).json(contactid);
    }
  });
});


module.exports = router;
