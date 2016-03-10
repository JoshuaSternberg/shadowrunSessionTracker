var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

////route includes
//var index = require('./routes/index');
//var user = require('./routes/user');
//
////routes
//app.use('/user', user);
//app.use('/', index);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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