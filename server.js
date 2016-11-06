
// enable use of css-modules on the backend
require('css-modules-require-hook/preset');

const express      = require('express');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan       = require('morgan');
const passport     = require('passport');
const session      = require('express-session');
const path         = require('path');

const index        = require('./server/modules/index');
const auth         = require('./server/modules/auth');
const dashboard    = require('./server/modules/dashboard');

const Config       = require('config');

const usersRoute   = require('./server/routes/users');

const flash        = require('connect-flash');

const app          = express();

// ============================================================================
//  Configuration
// ============================================================================

const PORT = process.env.PORT || Config.port;

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// use cookie parser to get cookie params
app.use(cookieParser());

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/server/views');

// use morgan to log requests to the console
app.use(morgan('dev'));

// user passport for auth
passport.use(auth.strategies.facebookStrategy);
passport.use(auth.strategies.googleStrategy);
passport.use(auth.strategies.twitterStrategy);
passport.use(auth.strategies.jwtStrategy);

app.use(session({ secret : 'verysecret',  resave : false, saveUninitialized : false }));
app.use(passport.initialize());
app.use(passport.session());

// use flash to store and display flash messages to the user
app.use(flash());

// ============================================================================
//  Routes
// ============================================================================

// static pages init
const buildDir = '/build';
const staticDir = path.join(__dirname, buildDir);
app.use('/static', express.static(staticDir));

// rest api init
const apiRouter = express.Router({ mergeParams : true });
apiRouter.use('/users', usersRoute);
app.use('/v1/api', apiRouter);

// modules init
app.use('/auth', auth.routes);
app.use('/dashboard', dashboard.routes);
app.use('/', index.routes);


// ============================================================================
//  Start Server
// ============================================================================

app.listen(PORT, function () {
  console.log('Hello from myJourney.io server listening on port %s.', PORT);
});
