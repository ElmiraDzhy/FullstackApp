const {Chat, Message} = require('../models');

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
        const {params: {chatId}, payload: {userId}} = req;
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
        const {body, params: {chatId}} = req;
        const chatInstance = await Chat.findById(chatId);
        const newMsgInstance = await Message.create(body);
        chatInstance.messages.push(newMsgInstance);
        await chatInstance.save();
        res.status(201).send({data: chatInstance})
    } catch (err) {
        next(err);
    }
}

module.exports.getAllUserChats = async (req, res, next) => {
    try {
        const {payload: {userId}} = req;
        const userChats = await Chat.find({
            members: userId
        })
        res.status(200).send({data: userChats});

    } catch (err) {
        next(err);

    }
}

module.exports.getChatWithMessages = async (req, res, next) => {
    try {
        const {params: {chatId}} = req;
        const result = await Chat.findById(chatId).populate('messages')
        res.status(200).send({data: result});

    } catch (err) {
        next(err)

    }
}
//todo (optional): delete user from chat and delete chat