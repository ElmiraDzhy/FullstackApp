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
const createToken = ({userId, email}, {time, secret}) => {
    return promisifyJWTSing({
        userId,
        email
    }, secret, {expiresIn: time});
}

const verifyToken =  (token, {secret}) => promisifyJWTVerify(token, secret);


module.exports.createTokenPair = async (payload) => {
    return {
        accessToken: await createToken(payload, tokenConfig.access),
        refreshToken: await createToken(payload, tokenConfig.refresh)
    }
}


module.exports.verifyAccessToken = async (token) => verifyToken(token, tokenConfig.access)
module.exports.verifyRefreshToken = async (token) => verifyToken(token, tokenConfig.refresh)
