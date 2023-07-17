const mongoose = require('mongoose');
const db = require('../configs/db.json');
const CONFIG = db[process.env.NODE_ENV || "development"];
const fs = require('fs');
const path = require('path');


mongoose.connect(`mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`)
    .catch((err) => {
        console.log('connect failed')
        process.exit(1)
    });

const models = {};
const basename = path.basename(__dirname);
fs
    .readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js' &&
            file.indexOf('.test.js') === -1
        );
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))
        models[model.modelName] = model;
    });

module.exports = models;
