// SOLICITUD  DE TOKEN
var request = require("request");
require('dotenv').config();

exports.getUserToken = function(varcode, callback) {

    var options = { method: 'POST',
        url: process.env.URL_BASE + '/security/oauth-otp/oauth2/token',
        headers: 
        {   'cache-control': 'no-cache',
             Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded' },
        form: 
        {   grant_type: 'authorization_code',
            code: varcode,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URI,} };

    request(options, function (error, response, body) {
        if (error){
            //throw new Error(error);
            callback(err);
        }

        console.log(body);
        let bodyJson = JSON.parse(body);
        callback(null, bodyJson.access_token);
        //COGER EL TOKEN Y EMPEZAR A CONSUMIR SERVICIOS

        
    });

}