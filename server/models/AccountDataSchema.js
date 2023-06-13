const mongoose = require("mongoose");

const AccountFormDataSchema = new mongoose.Schema({
    account: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: Number,
        required: true,
    },
    ssn: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    inspectionUnit: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

const Account = mongoose.model("Account", AccountFormDataSchema);
module.exports = Account;
