const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const Account = mongoose.model('Account', ReactFormDataSchema);
module.exports = Account;