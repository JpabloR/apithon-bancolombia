const express = require('express');
const async = require('async');
const router = express.Router();
const cardServ = require('../services/cards');
const userController = require('../controllers/user-controller');

router.get('/', (req, res) => {
    let userId = req.query.userId;
    userController.getUser(userId, function(err, user){
        cardServ.getCards(user.token, function (err, body) {
            let bodyJson = JSON.parse(body);
            let data = bodyJson.data;
            let cardResponses = [];
            async.each(data, (card, cb) => {
                let cardJson = {};
                cardJson.card = card.cards;
                let cardId = card.header.id;
                cardServ.getCardTransactions(cardId, user.token, function (err, body) {
                    //res = sendResponse(res, 200, body)
                    let bdJson = JSON.parse(body);
                    cardJson.transaction = bdJson.data;
                    cardServ.getCardDetail(cardId, user.token, function (err, detail) {
                        let detailJson = JSON.parse(detail);
                        cardJson.detail = detailJson.data[0];
                        cardResponses.push(cardJson);
                        cb();
                    })

                });
            }, function(err){
                res = sendResponse(res, 200, {cards: cardResponses})
            })

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