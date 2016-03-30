var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var passport = require('./strategies/user');
var session = require('express-session');

//route includes
var index = require('./routes/index');
var user = require('./routes/user');
var register = require('./routes/register');
var character = require('./routes/character');
var snapshot = require('./routes/snapshot');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Passport Session Configuration //
app.use(session({
    secret: 'secret',
    key: 'user',
    resave: 'true',
    saveUninitialized: false,
    cookie: {maxage: 60000, secure: false}
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/register', register);
app.use('/user', user);
app.use('/preMadeNpcs', character);
app.use ('/snapshot', snapshot);
app.use('/', index); // Whack is default


// Mongo Connection //
var mongoURI = "mongodb://localhost:27017/shadowrunTrackerDB";
//"mongodb://joshuasternberg:borgo11111@ds015929.mlab.com:15929/shadowruntrackerdb"
//var mongoURI = "";

var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
    if(err) console.log("MONGO ERROR: ", err);
});

mongoDB.once('open', function(){
    console.log("Connected to Mongo, chummer!");
});

app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

//app set
app.set('port', (process.env.PORT || 5000));

//listen
app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});