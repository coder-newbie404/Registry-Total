const mongoose = require("mongoose");

const VehicleInfoFormDataSchema = new mongoose.Schema({  
  registrationNumber: {
    type: String,
    required: true,
  },
  vehicleInspectionNumber: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  mark: {
    type: String,
    required: true,
  },
  modelCode: {
    type: String,
    required: true,
  },
  engineNumber: {
    type: String,
    required: true,
  },
  chassisNumber: {
    type: String,
    required: true,
  },
  manufacturedYearAndCountry: {
    type: String,
    required: true,
  },
  lifetimeLimitTo: {
    type: String,
    required: true,
  },
  commercialUse: {
    type: String,
    required: true,
  },
  modification: {
    type: String,
    required: true,
  },
  updateFields: {
    type: String,
    required: true,
  },
  wheelFormula:{
    type: String,
    required: true,
},
wheelTread:{
    type: String,
    required: true,
},
overallDimession:{
    type: String,
    required: true,
},
insideCargoContainerDimession:{
    type: String,
    required: true,
},
wheelBase:{
    type: String,
    required: true,
},
kerbMass:{
    type: String,
    required: true,
},
designAuthorizedPayLoad:{
    type: String,
    required: true,
},
designAuthorizedTotalMass:{
    type: String,
    required: true,
},
designAuthorizedTowedMass:{
    type: String,
    required: true,
},
permissibleNoOfPersCarried:{
    type: String,
    required: true,
},
typeOfFuelUsed:{
    type: String,
    required: true,
},
engineDisplacement:{
    type: String,
    required: true,
},
maxOutputRpm:{
    type: String,
    required: true,
},
no:{
    type: String,
    required: true,
},
numberOfTires1:{
    type: String,
    required: true,
},
numberOfTires2:{
    type: String,
    required: true,
},
inspectionReportNo:{
    type: String,
    required: true,
},
inspectionCenter:{
    type: String,
    required: true,
},
validUntil:{
    type: String,
    required: true,
},
picture:{
    type: String,
    required: true,
},
equippedWithTachograph:{
    type: String,
    required: true,
},
inspectionStamp:{
    type: String,
    required: true,
},
note:{
    type: String,
    required: true,
},
updateFields:{
    type: String,
    required: true,
}
});

const VehicleInfo = mongoose.model("VehicleInfo", VehicleInfoFormDataSchema);
module.exports = VehicleInfo;
