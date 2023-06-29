const mongoose = require('mongoose');

const {Schema} = mongoose;

const messageSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        required: [true, 'Author is required field for message'],
        //?
        ref: 'User'
    },
    body: {
        type: String,
        required: [true, 'Body is required field for message'],
    },
    status: {
        type: Boolean,
    },
    chatId: {
        type: Schema.Types.ObjectId,
    }

});


const Message = mongoose.model('Message', messageSchema);

module.exports = Message;