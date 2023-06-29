const express = require('express');
const userRouter = express.Router();
const UserController = require('../controllers/User.controller');

userRouter.post('/sign-up', UserController.signUp); //signUp
userRouter.post('/sign-in', UserController.signUp); //signIn
userRouter.get('/userId', UserController.getOne);
userRouter.delete('/userId', UserController.deleteOne);

module.exports = userRouter;