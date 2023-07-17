const mongoose = require('mongoose');

const {Schema} = mongoose;

const notifSchema = new Schema({
    body: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    type: {
        type: String,
        enum: ['error', 'info', 'success', 'other'],
        default: 'info'
    }
});


const Notification = mongoose.model('Notification', notifSchema);

module.exports = Notification;