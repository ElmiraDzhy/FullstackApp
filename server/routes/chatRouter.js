const express = require('express');
const chatRouter = express.Router();
const ChatController = require('../controllers/Chat.controller');

chatRouter.post('/', ChatController.createChat);
chatRouter.post('/:chatId', ChatController.addMessage);
chatRouter.get('/:chatId/users', ChatController.getChatWithUsers);
chatRouter.get('/:userId/all', ChatController.getAllUserChats);
chatRouter.put('/:chatId/:userId', ChatController.addUserToChat);
chatRouter.get('/:chatId', ChatController.getChatWithMessages)

module.exports = chatRouter;