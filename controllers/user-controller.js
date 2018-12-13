let userRepo = require('../repositories/user-repo')

exports.getUser = function(id, callback) {
    userRepo.getUserById(id, function (err, data) {
        if(!err){
            callback(null, data)
        }else{
            callback(err);
        }
    })
};

exports.updateUserToken = function(id, callback) {

    userRepo.setUserToken(id, token);
};