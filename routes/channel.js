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
            let agenstJson = JSON.parse(agents);
            response.agents = agenstJson.data;
            channelServ.getAtms(token, function (err, atms) {
                let atmsJson = JSON.parse(atms);
                response.atms = atmsJson.data;
                channelServ.getBranches(token, function (err, branches) {
                    let branchesJson = JSON.parse(branches);
                    response.braches = branchesJson.data;
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