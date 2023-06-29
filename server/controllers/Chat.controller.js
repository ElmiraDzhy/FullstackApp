const {Chat} = require('../models');

module.exports.createChat = async (req, res, next) => {
    try {
        const {body} = req;
        const newChat = await Chat.create(body);
        res.status(201).send({data: newChat});
    } catch (err) {
        next(err);
    }
}

module.exports.addUserToChat = async (req, res, next) => {
    try {
        const {params: {chatId, userId}} = req;
        const result = await Chat.updateOne(
            {_id: chatId},
            {
                $addToSet: {
                    members: userId
                }
            });
        res.status(200).send({data: result});

    } catch (err) {
        next(err)
    }
}

module.exports.getChatWithUsers = async (req, res, next) => {
    try {
        const {params: {chatId}} = req;
        const result = await Chat.findById(chatId).populate('members')
        res.status(200).send({data: result});

    } catch (err) {
        next(err)

    }
}

module.exports.addMessage = async (req, res, next) => {
    try {

    } catch (err) {

    }
}

module.exports.getAllUserChats = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const userChats = await Chat.find({
            members: userId
        })
        res.status(200).send({data: userChats});

    } catch (err) {

    }
}

//todo (optional): delete user from chat and delete chat