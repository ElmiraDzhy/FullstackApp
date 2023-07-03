const jwt = require('jsonwebtoken');
const {promisify} = require('node:util');

const promisifyJWTSing = promisify(jwt.sign);
const promisifyJWTVerify = promisify(jwt.verify);
const SECRET_VALUE = 'super-secret';
const ACCESS_TOKEN = 60;

module.exports.createToken = async ({userId, email}) => {
    const token = await promisifyJWTSing({userId, email}, SECRET_VALUE, {
        expiresIn: ACCESS_TOKEN
    });

    return token;
}

module.exports.verifyToken = async(token) => {
    return promisifyJWTVerify(token, SECRET_VALUE);
}