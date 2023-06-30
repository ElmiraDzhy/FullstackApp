const express = require('express');
const userRouter = express.Router();
const UserController = require('../controllers/User.controller');
const {hashPass} = require('../middlewares/hashPass');

userRouter.post('/sign-up', hashPass, UserController.signUp); //signUp
userRouter.post('/sign-in', UserController.signIn); //signIn
userRouter.get('/:userId', UserController.getOne);
userRouter.delete('/:userId', UserController.deleteOne);

module.exports = userRouter;