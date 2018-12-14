const express = require('express');
const router = express.Router();
const banserv = require('../services/security');

router.get('/code', (req, res) => {
    let code = req.query.code;
    console.log(code);
    
    res.render('loading');

    banserv.getUserToken(code);

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