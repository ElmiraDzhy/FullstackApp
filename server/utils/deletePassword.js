module.exports.deletePasswords = (userObj) => {
    const readyUser = Object.assign({}, userObj._doc);
    delete readyUser.passwordHash;
    return readyUser;
}