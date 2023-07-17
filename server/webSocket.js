const CONSTANTS = require('./constants');
const {WS_MSG_TYPE} = CONSTANTS;
const NotificationController = require('./controllers/Notification.controller');

module.exports.createSocketConnect =  (socket) => {
    console.log('CONNECTION IS ON');
    socket.on('add_new_notification', (messageBody) => {
        console.log(messageBody);
    });



    setTimeout(() => {
        const notif = NotificationController.addNewNotification("notification text to client")
            .then(result => {
                socket.emit(WS_MSG_TYPE.NEW_NOTIFICATION, result);
            })

    }, 10000);

}