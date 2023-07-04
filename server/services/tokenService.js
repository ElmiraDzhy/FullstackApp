const jwt = require('jsonwebtoken');
const {promisify} = require('node:util');
const {
    ACCESS_SECRET_VALUE,
    REFRESH_SECRET_VALUE,
    ACCESS_TIME,
    REFRESH_TIME
} = require('../constants');

const promisifyJWTSing = promisify(jwt.sign);
const promisifyJWTVerify = promisify(jwt.verify);

const tokenConfig = {
    access: {
        secret: ACCESS_SECRET_VALUE,
        time: ACCESS_TIME
    },
    refresh: {
        secret: REFRESH_SECRET_VALUE,
        time: REFRESH_TIME
    }
}
const createToken = (payload, {time, secret}) => {
    return promisifyJWTSing({
        userId,
        email
    }, secret, expiresIn);
}

const verifyToken = async (token, secret) => promisifyJWTVerify(token, secret);


module.createTokenPair = async (payload) => {
    return {
        accessToken: createToken(payload, tokenConfig.access),
        refreshToken: createToken(payload, tokenConfig.refresh)
    }
}


module.exports.verifyAccessToken = async (token) => verifyToken(token, tokenConfig.access)
module.exports.verifyRefreshToken = async (token) => verifyToken(token, tokenConfig.refresh)
