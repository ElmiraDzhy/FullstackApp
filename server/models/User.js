const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email is required field for user'],
        unique: true
    },
    passwordHash: {
        type: String,
        required: [true, 'Password is required field for user']
    },
    birthday: {
        type: Date,
    }

});


const User = mongoose.model('User', userSchema);

module.exports = User;