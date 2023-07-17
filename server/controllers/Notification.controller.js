const {Notification} = require('../models/index');

module.exports.addNewNotification = async (body) => {
    const notif = await Notification.create({
        body
    });
    return notif;
}