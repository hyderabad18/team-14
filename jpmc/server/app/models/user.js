const mongoose = require('mongoose');

const User = mongoose.Schema({
    email_id: String,
    password: String,
    type: String
});

module.exports = mongoose.model('User', User);
