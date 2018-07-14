const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = mongoose.Schema({
    email_id: String,
    password: String,
    type: String
});

// Define schema methods
User.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
User.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		this.password = this.hashPassword(this.password);
		console.log('generated hashPassword');
		next()
	}
})

module.exports = mongoose.model('User', User);
