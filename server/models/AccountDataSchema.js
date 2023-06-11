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
    },
    permission: {
        type: Number,
        required: true,
    }
});

const Account = mongoose.model("Account", AccountFormDataSchema);
module.exports = Account;
