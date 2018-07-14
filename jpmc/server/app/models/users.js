const mongoose = require('mongoose');

const Student = mongoose.Schema({
    email_id: String,
    password: String
});

module.exports = mongoose.model('Student', Student);
