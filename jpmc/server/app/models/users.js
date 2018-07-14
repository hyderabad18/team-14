const mongoose = require('mongoose');

const Student = mongoose.Schema({
    email_id: String,
    password: String,
    type: String
});

module.exports = mongoose.model('Student', Student);
