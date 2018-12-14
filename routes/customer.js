const express = require('express');
const router = express.Router();
const customerServ = require('../services/customer');
const userController = require('../controllers/user-controller');

router.get('/', (req, res) => {
    let userId = req.query.userId;
    userController.getUser(userId, function(err, user){

        customerServ.getCustomerBasicInformation(user.token, function (err, body) {
            let bodyJson = JSON.parse(body);
            res = sendResponse(res, 200, bodyJson.data[0]);
        });
    })
});

router.get('/customer-details', (req, res) => {
    let userId = req.query.userId;
    userController.getUser(userId, function(err, user){

        customerServ.getCustomerDetails(user.token, function (err, body) {
            let bodyJson = JSON.parse(body);
            res = sendResponse(res, 200, bodyJson.data[0])
        });
    })
});

router.get('/customer-financial-data', (req, res) => {
    let userId = req.query.userId;
    userController.getUser(userId, function(err, user){

        customerServ.getCustomerFinancialData(user.token, function (err, body) {
            let bodyJson = JSON.parse(body);
            res = sendResponse(res, 200, bodyJson.data[0].financialData);
        });
    })
});

router.get('/customer-ubication', (req, res) => {
    let userId = req.query.userId;
    userController.getUser(userId, function(err, user){

        customerServ.getCustomerUbication(user.token, function (err, body) {
            let bodyJson = JSON.parse(body);
            res = sendResponse(res, 200, bodyJson.data[0].ubicationData)
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