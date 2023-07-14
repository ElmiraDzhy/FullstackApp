const express = require('express');
const chatRouter = express.Router();
const ChatController = require('../controllers/Chat.controller');
const {checkToken} = require('../middlewares/checkToken');
const upload = require('../utils/multer');
const {checkImage} = require("../middlewares/checkImage");

chatRouter.post('/', checkToken, upload.single('image'), checkImage, ChatController.createChat);
chatRouter.post('/:chatId', checkToken,upload.single('image'), checkImage, ChatController.addMessage);
chatRouter.get('/:chatId/users', checkToken, ChatController.getChatWithUsers);
chatRouter.get('/all', checkToken, ChatController.getAllUserChats);
chatRouter.put('/:chatId/', checkToken, ChatController.addUserToChat);
chatRouter.get('/:chatId', checkToken, ChatController.getChatWithMessages);
chatRouter.delete('/messages/:messageId', checkToken, ChatController.deleteMessage);
chatRouter.delete('/:chatId', checkToken, ChatController.deleteChat);

module.exports = chatRouter;