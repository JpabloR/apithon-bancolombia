const express = require('express');
const app = express();
const path = require('path');
const auth = require('./routes/auth');
const cards = require('./routes/cards');
const customer = require('./routes/customer');
const aggregation = require('./routes/aggregation');
const channel = require('./routes/channel');
const payments = require('./routes/payments');

const request = require("request");
require('dotenv').config()
var mongoose = require('mongoose');
const appConfig = require('./config/app-config')();

//map the public content
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());
app.use('/auth', auth);
app.use('/cards', cards);
app.use('/customer', customer);
app.use('/aggregation', aggregation);
app.use('/channel', channel);
app.use('/payments', payments);

const port = process.env.PORT || 4600;
app.listen(port, (req, res)=>{
    console.log(`RUNNING on port ${port}`);
});


/* DATABASE CONNECTION *//*
var mongoURI = appConfig.DB_CONNECTION;
var connection;
if(mongoURI){
    module.exports = connection = mongoose.createConnection(mongoURI);
}else{
    console.log('error','Set DB_PLATFORM in your environment');
}
connection.on('connected', function(){
    // Install the types, plugins and monkey patches
    //var loaded = dbref.loadTypes(mongoose);
    console.log('info','Successful connection to db');
});
connection.on('error', function(err){
    console.log('warn','There was an error while connection to db', err);
});
connection.on('disconnected', function(){
    console.log('warn','db was disconnected');
});*/