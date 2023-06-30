const bcrypt = require('bcrypt');

const SALT_ROUND = 1;

module.exports.hashPass = async (req, res, next) => {
    //todo: fix error here
    try {
        const {body: {password}} = req;
        req.body.passwordHash = await bcrypt.hash(password, SALT_ROUND);
        next();
    } catch (err) {
        next(err);
    }
}