const mongoose = require('mongoose');

const Phone = mongoose.Schema({
    phone: String, 
});

module.exports = mongoose.model('Phone', Phone);
