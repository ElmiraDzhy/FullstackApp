const {User} = require('../models');
const bcrypt = require('bcrypt');
const NotFoundError = require('../errors/NotFoundError');
const InvalidDataError = require('../errors/InvalidDataError');
const {createToken} = require('../services/tokenService');

module.exports.signUp = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        const token = await createToken({email: req.body.email, userId: newUser._id});
        const readyUser = Object.assign(({}, newUser._doc));
        delete readyUser.passwordHash;
        res.status(200).send({data: readyUser, token});
        res.status(201).send({data: readyUser, token});
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
        const token = await createToken({email, userId: foundUser._id});
        const readyUser = Object.assign(({}, foundUser._doc));
        delete readyUser.passwordHash;
        res.status(200).send({data: readyUser, token});
    } catch (err) {
        next(err);
    }
}

module.exports.getOne = async (req, res, next) => {
    try {
        const {payload: {userId}} = req;
        const userInstance = await User.findById(userId);
        res.status(200).send({data: userInstance});

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

