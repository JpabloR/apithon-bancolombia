var mongoose = require('mongoose');
const appConfig = require('../config/app-config')();
/* DATABASE CONNECTION */
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
});