const {verifyAccessToken} = require("../services/tokenService");
const TokenError = require('../errors/TokenError');

module.exports.checkToken = async (req, res, next) => {
    try {
        const {headers: {authorization}} = req;
        if (!authorization) {
             throw new TokenError('Need authorization');
        }
        const [, token] = authorization.split(' ');
        req.payload = await verifyAccessToken(token);
        next();
    } catch (err) {
        next(err);
    }
}