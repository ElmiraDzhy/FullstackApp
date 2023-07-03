class TokenError extends Error {
    constructor (message) {
        super(message);
        this.status = message || 'Token Error';
    }

}

module.exports = TokenError;