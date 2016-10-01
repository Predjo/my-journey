'use strict';

const express      = require('express');
const bodyParser   = require('body-parser');
const morgan       = require('morgan');

const Config       = require('./config');

const usersRoute   = require('./app/routes/users');

const app  = express();

// ============================================================================
//  Configuration
// ============================================================================

const PORT = process.env.PORT || Config.port;

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// ============================================================================
//  Start Server
// ============================================================================

app.use('/users', usersRoute);

// ============================================================================
//  Start Server
// ============================================================================

app.listen(PORT, function() {
  console.log('Hello from myJourney.io server listening on port %s.', PORT);
});