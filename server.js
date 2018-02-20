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




app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});





// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}
