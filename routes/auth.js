const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
const banserv = require('../services/security');

router.get('/code', (req, res) => {
    let code = req.query.code;
    let id = req.query.state;
    console.log(code);
    userController.updateUserToken(id, code);
    res.render('loading');
});

module.exports = router;

const sendResponse = (res, statusCode, body, headers = '') => {
    res.status(statusCode);
    res.setHeaders = headers;
    res.json(body);
    return res;
};