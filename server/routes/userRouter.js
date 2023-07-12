const express = require('express');
const userRouter = express.Router();
const UserController = require('../controllers/User.controller');
const {hashPass} = require('../middlewares/hashPass');
const {checkToken} = require('../middlewares/checkToken');
const {checkImage} = require('../middlewares/checkImage');
const upload = require('../utils/multer');

userRouter.post('/sign-up', upload.single('image'), checkImage, hashPass, UserController.signUp); //signUp
userRouter.post('/sign-in', UserController.signIn); //signIn
userRouter.get('/', checkToken, UserController.getOne);
userRouter.delete('/', checkToken, UserController.deleteOne);
userRouter.post('/refresh', UserController.refreshSession);

userRouter.patch('/', checkToken, upload.single('image'), checkImage, UserController.updateOne);


module.exports = userRouter;