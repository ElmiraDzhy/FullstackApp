const express = require('express');
const userRouter = require('./userRouter');
const chatRouter = require('./chatRouter');
const CONSTANTS = require("../constants");

const apiRouter = express.Router();

apiRouter.use('/users', userRouter);
apiRouter.use('/chats', chatRouter);
apiRouter.use(express.static(CONSTANTS.IMAGE_STATIC_PATH));

module.exports = apiRouter;