const jwt = require('jsonwebtoken');
const {promisify} = require('node:util');

const promisifyJWTSing = promisify(jwt.sign);
const promisifyJWTVerify = promisify(jwt.verify);

const ACCESS_SECRET_VALUE = 'super-secret';
const REFRESH_SECRET_VALUE = 'super-secret-refresh';
const ACCESS_TIME = 60;
const REFRESH_TIME = 60 * 60;

module.exports.createAccessToken = async ({userId, email}) => {
    const token = await promisifyJWTSing({userId, email}, ACCESS_SECRET_VALUE, {
        expiresIn: ACCESS_TIME
    });
    return token;
}

module.exports.createRefreshToken = async ({userId, email}) => {
    const token = await promisifyJWTSing({userId, email}, REFRESH_SECRET_VALUE, {
        expiresIn: REFRESH_TIME
    });
    return token;
}

module.exports.verifyAccessToken = async (token) => {
    return promisifyJWTVerify(token, ACCESS_SECRET_VALUE);
}

module.exports.verifyRefreshToken = async (token) => {
    return promisifyJWTVerify(token, REFRESH_SECRET_VALUE);
}