const express = require('express');
const chatRouter = express.Router();
const ChatController = require('../controllers/Chat.controller');
const {checkToken} = require('../middlewares/checkToken');

chatRouter.post('/', checkToken, ChatController.createChat);
chatRouter.post('/:chatId', checkToken, ChatController.addMessage);
chatRouter.get('/:chatId/users', checkToken, ChatController.getChatWithUsers);
chatRouter.get('/all', checkToken, ChatController.getAllUserChats);
chatRouter.put('/:chatId/', checkToken, ChatController.addUserToChat);
chatRouter.get('/:chatId', checkToken, ChatController.getChatWithMessages)

module.exports = chatRouter;