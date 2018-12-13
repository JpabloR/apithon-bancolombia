let mongoose = require('mongoose');
let connection = require('../connections/mongodb')
let Schema = mongoose.Schema;

let User = new Schema({
    $id: Schema.Types.ObjectId,
    userId: String,
    token: String
});

module.exports = connection.model('users', User);
