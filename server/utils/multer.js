const multer = require("multer");
const {IMAGE_STATIC_PATH} = require('../constants');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, IMAGE_STATIC_PATH);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}.${file.originalname}`);
    },
})
const upload = multer({storage});

module.exports = upload;