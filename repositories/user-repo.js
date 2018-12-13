const user = require('../models/user');

let Users = new user();



exports.getUserById  = function (id, callback) {
    user.findOne({userId:id}, callback);
};


exports.setUserToken = function (id, token,  callback) {
    this.getUserById(id, function(err, user){
        if (!err){
            user.token = token;
            user.save();
        }
    })
};

