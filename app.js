const express = require('express');
const app = express();
const path = require('path');
const auth = require('./routes/auth');
<<<<<<< HEAD
const request = require("request");
require('dotenv').config()
=======
var mongoose = require('mongoose');
const appConfig = require('./config/app-config')();
>>>>>>> 273d09f475432cdba092131e9f498b2f16f85d8d

//map the public content
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());
app.use('/auth', auth);

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