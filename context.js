//Require Mongoose
let mongoose = require('mongoose');

//Define a schema
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    id: String,
    name: String,
    context:{}
});

let User = mongoose.model('User', UserSchema );
module.exports = User;