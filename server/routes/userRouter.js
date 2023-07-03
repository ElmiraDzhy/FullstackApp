const express = require('express');
const userRouter = express.Router();
const UserController = require('../controllers/User.controller');
const {hashPass} = require('../middlewares/hashPass');
const {checkToken} = require('../middlewares/checkToken');

userRouter.post('/sign-up', hashPass, UserController.signUp); //signUp
userRouter.post('/sign-in', UserController.signIn); //signIn

userRouter.post('/auth', UserController.auth); //

userRouter.get('/',checkToken, UserController.getOne);
userRouter.delete('/', checkToken, UserController.deleteOne);

module.exports = userRouter;