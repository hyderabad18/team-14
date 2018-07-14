const mongoose = require('mongoose');

const Skills = mongoose.Schema({
    sector: String,
    skills: [String]
});

module.exports = mongoose.model('Skills', Skills);
