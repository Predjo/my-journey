'use strict';

global.__base      = __dirname + '/';

const express      = require('express');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan       = require('morgan');
const passport     = require('passport');
const session      = require('express-session');

const auth         = require('./app/modules/auth');

const Config       = require('./config');

const usersRoute   = require('./app/routes/users');
const authRouter   = auth.routes.authRouter;

const flash        = require('connect-flash');

const app  = express();

// ============================================================================
//  Configuration
// ============================================================================

const PORT = process.env.PORT || Config.port;

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use cookie parser to get cookie params
app.use(cookieParser());

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

// use morgan to log requests to the console
app.use(morgan('dev'));

// user passport for auth
passport.use(auth.strategies.facebookStrategy);
passport.use(auth.strategies.googleStrategy);
passport.use(auth.strategies.twitterStrategy);

app.use(session({ secret : 'verysecret',  resave : false, saveUninitialized : false }));
app.use(passport.initialize());
app.use(passport.session());

// use flash to store and display flash messages to the user
app.use(flash());

// ============================================================================
//  Routes
// ============================================================================

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// dashboard page
app.get('/dashboard', function(req, res) {
  res.render('pages/dashboard');
});

// rest api init
const apiRouter = express.Router({ mergeParams: true });
apiRouter.use('/users', usersRoute);
app.use('/v1/api', apiRouter);

// auth init
app.use('/auth', authRouter);

// ============================================================================
//  Start Server
// ============================================================================

app.listen(PORT, function() {
  console.log('Hello from myJourney.io server listening on port %s.', PORT);
});