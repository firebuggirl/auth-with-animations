

var express = require("express");
//var bodyParser = require("body-parser");
//var mongodb = require("mongodb");
//var ObjectID = mongodb.ObjectID;

//var CONTACTS_COLLECTION = "contacts";

// import environmental variables from our variables.env file
//require('dotenv').config({ path: 'variables.env' });

var app = express();
//app.use(bodyParser.json());


// Create link to Angular build directory
var distDir = __dirname + "/dist/";
//var distDir = __dirname + "/src/";
app.use(express.static(distDir));


// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
//var db;

// Connect to the database before starting the application server.
// mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mean-contactlist-angular2', function (err, database) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

  // Save database object from the callback for reuse.
  // db = database;
  // console.log("Database connection ready");

  // Initialize the app.
//   var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });
// });

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}
