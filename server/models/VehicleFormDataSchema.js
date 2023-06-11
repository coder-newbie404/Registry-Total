const mongoose = require("mongoose");

const VehicleFormDataSchema = new mongoose.Schema({
  registrationPlate: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  inspectionDate: {
    type: String,
    required: true,
  },
  inspectionUnit: {
    type: String,
    required: true,
  },
  inspectionNumber: {
    type: String,
    required: true,
  },
  certificateExpiration: {
    type: String,
    required: true,
  }
});

const Vehicle = mongoose.model("Vehicle", VehicleFormDataSchema);
module.exports = Vehicle;
