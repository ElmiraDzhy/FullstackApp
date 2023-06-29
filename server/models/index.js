const mongoose = require('mongoose');
const db = require('../configs/db.json');
const CONFIG = db[process.env.NODE_ENV || "development"];

const User = require('./User');
const Chat = require('./Chat');
const Message = require('./Message');

mongoose.connect(`mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`)
    .catch((err) => {
        console.log('connect failed')
        process.exit(1)
    });


module.exports = {
    User,
    Chat,
    Message
}
