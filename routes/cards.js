const express = require('express');
const router = express.Router();
const cardServ = require('../services/cards');
const userController = require('../controllers/user-controller');

router.get('/', (req, res) => {
    let userId = req.query.userId;
    userController.getUser(userId, function(err, user){
        cardServ.getCards(user.token, function (err, body) {
            res = sendResponse(res, 200, body)
        });

    })
});

router.get('/transactions', (req, res) => {
    let userId = req.query.userId;
    let cardId = req.query.cardId;
    userController.getUser(userId, function(err, user){
        cardServ.getCardTransactions(cardId, user.token, function (err, body) {
            res = sendResponse(res, 200, body)
        });

    })
});

router.get('/detail', (req, res) => {
    let userId = req.query.userId;
    let cardId = req.query.cardId;
    userController.getUser(userId, function(err, user){
        cardServ.getCardDetail(cardId, user.token, function (err, body) {
            res = sendResponse(res, 200, body)
        });

    })
});

module.exports = router;

const sendResponse = (res, statusCode, body, headers = '') => {
    res.status(statusCode);
    res.setHeaders = headers;
    res.json(body);
    return res;
};