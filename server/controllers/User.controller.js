const {User} = require('../models');
const bcrypt = require('bcrypt');
const NotFoundError = require('../errors/NotFoundError');
const {createToken} = require('../services/tokenService');

module.exports.signUp = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        const token = await createToken({email: req.body.email, userId: newUser._id});

        res.status(201).send({data: newUser, token});
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
        const result = await bcrypt.compare(password, foundUser.passwordHash);
        const token = await createToken({email, userId: foundUser._id});

        res.status(200).send({token});

    } catch (err) {
        next(err)
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

