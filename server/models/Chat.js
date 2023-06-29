const mongoose = require('mongoose');

const {Schema} = mongoose;

const chatSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required field for chat'],
    },
    members: {
        type: Schema.Types.ObjectId,
    },
    messages: {
        type: Schema.Types.ObjectId,
    },

});


const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;