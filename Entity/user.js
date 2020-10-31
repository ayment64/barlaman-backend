'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfCreation: {
        type: Date,
        default: Date.now,
    },
    lastLogin: Date,
    firstname: String,
    lastname: String,
    cin: String,
    imageurl: String,
    isAdmin: Boolean

})
module.exports = mongoose.model('User', UserSchema);
