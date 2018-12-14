const user = require('../models/user');

let Users = new user();



exports.getUserById  = function (id, callback) {
    user.findOne({userId:id}, callback);
};


exports.setUserToken = function (id, token,  callback) {
    user.findOneAndUpdate({userId: id},{$set:{token: token}}, callback)
};

