const {User, RefreshToken, Chat} = require('../models');
const bcrypt = require('bcrypt');
const NotFoundError = require('../errors/NotFoundError');
const InvalidDataError = require('../errors/InvalidDataError');
const TokenError = require('../errors/TokenError');
const TokenService = require('../services/tokenService');

module.exports.signUp = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        const tokens = await TokenService.createTokenPair({email: req.body.email, userId: newUser._id});
        const readyUser = Object.assign({}, newUser._doc);
        delete readyUser.passwordHash;
        const added = await RefreshToken.create({
            token: tokens.refreshToken,
            userId: newUser._id
        })
        res.status(201).send({data: readyUser, tokens});
    } catch (err) {
        next(err)
    }
}

module.exports.signIn = async (req, res, next) => {
    try {
        const {body: {email, password}} = req;
        const foundUser = await User.findOne({
            email
        });
        if (!foundUser) {
            throw new NotFoundError('User not found');
        }
        const auth = await bcrypt.compare(password, foundUser.passwordHash);
        if (!auth) {
            throw new InvalidDataError('Invalid credentials');
        }
        const tokens = await TokenService.createTokenPair({email, userId: foundUser._id});
        const added = await RefreshToken.create({
            token: tokens.refreshToken,
            userId: foundUser._id
        })
        const readyUser = Object.assign({}, foundUser._doc);
        delete readyUser.passwordHash;
        res.status(200).send({data: readyUser, tokens});
    } catch (err) {
        next(err);
    }
}

module.exports.getOne = async (req, res, next) => {
    try {
        const {payload: {userId}} = req;
        const userInstance = await User.findById(userId);
        if(!userInstance){
            throw new NotFoundError('User not found');
        }
        //if user exist - find all his chat and send it all together
        const userChats = await Chat.find({
            members: userId
        })

        const readyUser = Object.assign({}, userInstance._doc);
        delete readyUser.passwordHash;
        res.status(200).send({data: {
            user: readyUser,
            chatList: userChats
        }});

    } catch (err) {
        next(err)
    }
}

module.exports.deleteOne = async (req, res, next) => {
    try {
        const {payload: {userId}} = req;
        const userInstance = await User.findByIdAndDelete(userId);
        res.status(200).send({data: userInstance});
    } catch (err) {
        next(err)
    }
}

module.exports.refreshSession = async (req, res, next) => {
    const {body: {refreshToken}} = req;
    let verifyResult;

    try {
        verifyResult = await TokenService.verifyRefreshToken(refreshToken);
    } catch (err) {
        next(new TokenError('Invalid refresh token'));
    }

    try {
        if (verifyResult) {
            const foundUser = await User.findOne({
                email: verifyResult.email
            });
            const rtFromDB = await RefreshToken.findOne({
                $and: [
                    {token: refreshToken},
                    {userId: foundUser._id}
                ]
            })
            if (rtFromDB) {
                //remove from bd
                const removed = await rtFromDB.deleteOne();
                const tokens = await TokenService.createTokenPair({userId: foundUser._id, email: foundUser.email});

                //write new tokens into bd
                const add = await RefreshToken.create({
                    token: tokens.refreshToken,
                    userId: foundUser._id
                })
                res.status(200).send({
                    tokens
                })
            }
        }
        else {
            throw new TokenError('Token not found')
        }

    } catch (err) {
        next(err);
    }
}
