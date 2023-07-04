const mongoose = require('mongoose');

const {Schema} = mongoose;

const refreshTokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: [true, 'User id is required field'],
        ref: 'User'
    },
    token: {
        type: String,
        required: [true, 'Token is required field'],
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    fingerPrint: {
        type: String,
    }

});


const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema);

module.exports = RefreshToken;