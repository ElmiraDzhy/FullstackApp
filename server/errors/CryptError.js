class CryptError extends Error {
    constructor (message) {
        super(message);
        this.status = 'No Data';
    }

}

module.exports = CryptError;