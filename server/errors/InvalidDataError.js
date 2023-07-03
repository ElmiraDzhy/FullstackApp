class InvalidDataError extends Error {
    constructor (message) {
        super(message);
        this.status = message || 'Invalid data error';
    }

}

module.exports = InvalidDataError;