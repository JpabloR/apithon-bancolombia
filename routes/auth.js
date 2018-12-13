const express = require('express');
const router = express.Router();
let userController = require('../controllers/user-controller')

router.get('/code', (req, res) => {
    let code = req.query.code;
    console.log(code);
    res.render('sv');
    //res =  sendResponse(res, 200, 'ok');
});

module.exports = router;

const sendResponse = (res, statusCode, body, headers = '') => {
    res.status(statusCode);
    res.setHeaders = headers;
    res.json(body);
    return res;
};