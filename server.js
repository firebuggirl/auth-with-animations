'use strict';
const express = require("express");
const helmet = require('helmet');//initiate security headers
const app = express();
const bodyParser = require("body-parser");
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
const routes = require('./routes/index');
const helpers = require('./helpers');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const Contact = require('./models/contacts');
var CONTACTS_COLLECTION = "contacts";

const mongoose = require('mongoose');
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

app.use(bodyParser.json());
app.use(cors());

// Create link to Angular build directory
const distDir = __dirname + "/dist/";
//var distDir = __dirname + "/src/";
app.use(express.static(distDir));

app.use(helmet());//get security report here: https://securityheaders.io/
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     defaultSrc: ["'self'"]
//   //  styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
//   }
// }));


if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file';
}



app.use('/', routes);

app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.contact = req.contact || null;
  res.locals.currentContact = req.session.contactId;

  next();
});



const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

const checkScopes = jwtAuthz(['read:messages']);


app.get('/api/public', function(req, res) {
  res.json({
    message: "Hello from a public endpoint! You don't need to be authenticated to see this."
  });
});

app.get('/api/private', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });
});

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.get("/api/contacts", function(req, res) {
  db.collection('contacts').find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/contacts", function(req, res) {
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

app.get("/api/contacts/:id", function(req, res) {
  const contactid = req.params.contactid;
  //db.collection('contacts').findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
  //db.collection('contacts').findOne({ _id: new ObjectID(req.session.contactId) }, function(err, doc) {
  db.collection('contacts').findOne( contactid , function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get contact");
    } else {
      res.status(200).json(doc);
      console.log(contactid);
    }
  });
});


app.put("/api/contacts/:id", function(req, res) {
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

app.delete("/api/contacts/:id", function(req, res) {
  const contactid = req.params.contactid;
  // db.collection('contacts').deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
  //db.collection('contacts').deleteOne({_id: new ObjectID(req.session.contactId) }, function(err, result) {
  db.collection('contacts').deleteOne(contactid, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete contact");
    } else {
      //res.status(200).json(req.params.id);
      res.status(200).json(contactid);
    }
  });
});



// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}
