const mongoose = require('mongoose');

const User = mongoose.Schema({
    email_id: String,
    password: String
});

module.exports = mongoose.model('User', User);
