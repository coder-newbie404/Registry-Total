const mongoose = require("mongoose");

const OwnerFormDataSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    ssn: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }
});

const Owner = mongoose.model("Owner", OwnerFormDataSchema);
module.exports = Owner;
