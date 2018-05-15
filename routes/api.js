'use strict';

require('dotenv').config({ path: __dirname + '/../variables.env' });
//const fs = require('fs');

const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact.js');

const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const util = require('util');//for logging
//const cors = require('cors');
//const cookieParser = require('cookie-parser');

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

// API ROOT ROUTE
router.get('/', (req, res) => {
    res.status(200).json({ status: 200, result: 'success' });
});

// GET ALL contactS
router.get('/contact', (req, res, next) => {
    Contact.find((err, products) => (err) ? next(err) : res.json(products));
});

// GET A Contact
router.get('/contact/:id', (req, res, next) => {
    Contact.findById(req.params.id, (err, post) => (err) ? next(err) : res.json(post));
});

// SAVE A contact
router.post('/contact', (req, res, next) => {
    Contact.create(req.body, (err, post) => (err) ? next(err) : res.json(post));
});

// UPDATE Contact
router.put('/contact/:id', (req, res, next) => {
    Contact.findByIdAndUpdate(req.params.id, req.body, (err, post) => (err) ? next(err) : res.json(post));
});

// DELETE A Contact
router.delete('/contact/:id', (req, res, next) => {
    Contact.findByIdAndRemove(req.params.id, req.body, (err, post) => (err) ? next(err) : res.json(post));
});
module.exports = router;
