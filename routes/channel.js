const express = require('express');
const router = express.Router();
const channelServ = require('../services/channel.js');
const userController = require('../controllers/user-controller');

router.get('/all', (req, res) => {
    let userId = req.query.userId;
    let response = {};
    userController.getUser(userId, function(err, user){
        let token = user.token;
        channelServ.getAgents(token, function (err, agents) {
            response.agents = agents;
            channelServ.getAtms(token, function (err, atms) {
                response.atms = atms;
                channelServ.getBranches(token, function (err, branches) {
                    response.braches = branches;
                    res = sendResponse(res, 200,response);
                })
            })
        })

    })
});

module.exports = router;

const sendResponse = (res, statusCode, body, headers = '') => {
    res.status(statusCode);
    res.setHeaders = headers;
    res.json(body);
    return res;
};