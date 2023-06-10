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

const Vehicle = mongoose.model('Vehicle', ReactFormDataSchema);
module.exports = Vehicle;