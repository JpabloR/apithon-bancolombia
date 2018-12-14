let userRepo = require('../repositories/user-repo');
const banserv = require('../services/bancolombia');


exports.getUser = function(id, callback) {
    userRepo.getUserById(id, function (err, data) {
        if(!err){
            callback(null, data)
        }else{
            callback(err);
        }
    })
};

exports.updateUserToken = function(id, code) {
    banserv.getUserToken(code, function(err, token) {
        if(!err)
            userRepo.setUserToken(id, token, function (err, data) {
                console.log("updated token");
            });
    });

};