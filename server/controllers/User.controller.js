const {User} = require('../models');
const bcrypt = require('bcrypt');
const NotFoundError = require('../errors/NotFoundError');
const {createToken, verifyToken} = require('../services/tokenService');

module.exports.signUp = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).send({data: newUser});
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
        res.status(200).send({data: "success"});

    } catch (err) {
        next(err)
    }
}

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const userInstance = await User.findById(userId);
        res.status(200).send({data: userInstance});

    } catch (err) {
        next(err)
    }
}

module.exports.deleteOne = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const userInstance = await User.findByIdAndDelete(userId);
        res.status(200).send({data: userInstance});
    } catch (err) {
        next(err)
    }
}

module.exports.auth = async (req, res, next) => {
    try {
        const {body: {email}} = req;
        const user = await User.findOne({
            email
        });
        const token = await createToken({email, userId: user._id});
        res.status(200).send({
            token
        });
    } catch (err) {
        next(err)
    }
}

module.exports.checkToken = async (req, res, next) => {
    try {
        const {headers: {authorization}} = req;
        const [, token] = authorization.split(' ');
        const result = await verifyToken(token);
        res.status(200).send({
            data: result
        })
    } catch (err) {
        next(err);
    }
}