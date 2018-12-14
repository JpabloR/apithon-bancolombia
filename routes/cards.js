const express = require('express');
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
            data.forEach(card => {
                cardResponses.push(card.cards);
               /* let cardId = card.card_number == "************1212" ? "1212121212121212" : "4343434343434356"
                cardServ.getCardTransactions(cardId, user.token, function (err, body) {
                    //res = sendResponse(res, 200, body)

                });*/
            })
            res = sendResponse(res, 200, {cards: cardResponses})
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