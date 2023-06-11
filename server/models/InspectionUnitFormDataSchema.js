const mongoose = require('mongoose');

const InspectionUnitFormDataSchema = new mongoose.Schema({
    inspectionUnit: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const InspectionUnit = mongoose.model('InspectionUnit', InspectionUnitFormDataSchema);
module.exports = InspectionUnit;