const express = require('express');
const router = express.Router();

router.get('/code', (req, res) => {
    let code = req.query.code;
    console.log(code);
    
    res.render('loading');

    // SOLICITUD  DE TOKEN
    var request = require("request");

    var options = { method: 'POST',
      url: process.env.BASE_URL + '/security/oauth-otp/oauth2/token',
      headers: 
       { 'cache-control': 'no-cache',
         Accept: 'application/json',
         'Content-Type': 'application/x-www-form-urlencoded' },
      form: 
       { grant_type: 'authorization_code',
         code: 'AAJhUM7AKPzxBKCRgWPrKoTN-RLHF7C7_ZtJkNfku7lePSsVUyWb8-kY_tYZh1SiWPvj69gWYNl0Ux_eSbwsTGqaenciwmTZpqGqt4rMXOt28EwM_uosclRALwkjEPr-qWkVOUF6sz6rVDgaqTnzYiMJ98ggeGJriu1MiJKaZsI8Yg',
         client_id: '98eb2197-cfbd-4ce0-833f-07e7a78e1424',
         client_secret: 'wG6cX2fS8wS3xM8vY4tE1mD7gM5lK8yH6rE1nW7vB8mJ6wA6jQ',
         redirect_uri: 'https://aphiton2018.appspot.com/auth/code',} };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });    

    console.log(process.env.REDIRECT_URI);

    //res =  sendResponse(res, 200, 'ok');
});

module.exports = router;

const sendResponse = (res, statusCode, body, headers = '') => {
    res.status(statusCode);
    res.setHeaders = headers;
    res.json(body);
    return res;
};