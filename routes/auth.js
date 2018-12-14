const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const userController = require('../controllers/user-controller');
=======
const banserv = require('../services/security');
>>>>>>> 7c0ff4deaa4f7dadbddd8aa33a8f0278fc94ea91

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