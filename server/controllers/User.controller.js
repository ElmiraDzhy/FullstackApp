const {User} = require('../models');
const bcrypt = require('bcrypt');

module.exports.signUp = async (req, res, next) => {
    try {
        const userData = {
            ...req.body
        };
        delete userData.password;
        const newUser = await User.create(userData);
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
            throw new Error('User not found');
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
