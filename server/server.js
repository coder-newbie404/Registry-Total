const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Account = require("./models/AccountDataSchema");
const InspectionUnit = require("./models/InspectionUnitFormDataSchema");
const VehicleInfo = require("./models/VehicleInfoFormDataSchema");
const Owner = require("./models/OwnerFormDataSchema")
const Vehicle = require("./models/VehicleFormDataSchema")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/DB", { useNewUrlParser: true });

app.post("/newuseracc", async (req, res) => {
    const formData = new Account({
        account: req.body.account,
        password: req.body.password,
        roles: 1,
        ssn: req.body.ssn,
        phoneNumber: req.body.phoneNumber,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email
    });
    try {
        await formData.save();
        res.send("inserted data..");
    } catch (err) {
        console.log(err);
    }
});

app.post("/useracc", async (req, res) => {
    try {
        const accountList = await Account.find({
            roles: 1,
        }).exec();
        console.log(JSON.stringify(accountList));
        res.json(accountList);
    } catch (err) {
        res.status();
    }
});

app.post("/upduseracc", async (req, res) => {
    try {
        const accountList = await Account.updateMany({
            ssn: req.body.oldssn
        }, {
            account: req.body.account,
            password: req.body.password,
            roles: 1,
            ssn: req.body.ssn,
            phoneNumber: req.body.phoneNumber,
            dateOfBirth: req.body.dateOfBirth,
            email: req.body.email
        }).exec();
        console.log(JSON.stringify(accountList));
        res.json(accountList);
    } catch (err) {
        res.status();
    }
});

app.post("/deluseracc", async (req, res) => {
    try {
        const accountList = await Account.deleteMany({
            ssn: req.body.ssn
        }).exec();
        console.log(JSON.stringify(accountList));
        res.json(accountList);
    } catch (err) {
        res.status();
    }
});

app.post("/newunitacc", async (req, res) => {
    const formData = new Account(
        {
            account: req.body.account,
            password: req.body.password,
            roles: 2,
            city: req.body.city,
            inspectionUnit: req.body.inspectionUnit
        }
    )
    try {
        await formData.save();
        res.send("inserted data..");
    } catch (err) {
        console.log(err);
    }
});

app.post("/unitacc", async (req, res) => {
    try {
        const accountList = await Account.find({
            roles: 2,
        }).exec();
        console.log(JSON.stringify(accountList));
        res.json(accountList);
    } catch (err) {
        res.status();
    }
});

app.post("/updunitacc", async (req, res) => {
    try {
        const accountList = await Account.updateMany({
            inspectionUnit: req.body.oldinspectionUnit
        }, {
            account: req.body.account,
            password: req.body.password,
            roles: 2,
            city: req.body.city,
            inspectionUnit: req.body.inspectionUnit
        }).exec();
        console.log(JSON.stringify(accountList));
        res.json(accountList);
    } catch (err) {
        res.status();
    }
});

app.post("/delunitacc", async (req, res) => {
    try {
        const accountList = await Account.deleteMany({
            inspectionUnit: req.body.inspectionUnit
        }).exec();
        console.log(JSON.stringify(accountList));
        res.json(accountList);
    } catch (err) {
        res.status();
    }
});

app.post("/newowner", async (req, res) => {
    const formData = new Owner({
        firstName: req.body.firstName,
        dateOfBirth: req.body.dateOfBirth,
        ssn: req.body.ssn,
        email: req.body.email,
        phone: req.body.phone
    });
    try {
        await formData.save();
        res.send("inserted data..");
    } catch (err) {
        console.log(err);
    }
});

app.get("/owner", async (req, res) => {
    try {
        const ownerList = await Owner.find().exec();
        console.log(JSON.stringify(ownerList));
        res.json(ownerList);
    } catch (err) {
        res.status();
    }
});

app.post("/newvehicleinfo", async (req, res) => {
    const formData = new VehicleInfo({
        registrationNumber: req.body.registrationNumber,
        vehicleInspectionNumber: req.body.vehicleInspectionNumber,
        type: req.body.type,
        mark: req.body.mark,
        modelCode: req.body.modelCode,
        engineNumber: req.body.engineNumber,
        chassisNumber: req.body.chassisNumber,
        manufacturedYearAndCountry: req.body.manufacturedYearAndCountry,
        lifetimeLimitTo: req.body.lifetimeLimitTo,
        commercialUse: req.body.commercialUse,
        modification: req.body.modification,
        updateFields: req.body.updateFields,
        wheelFormula: req.body.wheelFormula,
        wheelTread: req.body.wheelTread,
        overallDimession: req.body.overallDimession,
        insideCargoContainerDimession: req.body.insideCargoContainerDimession,
        wheelBase: req.body.wheelBase,
        kerbMass: req.body.kerbMass,
        designAuthorizedPayLoad: req.body.designAuthorizedPayLoad,
        designAuthorizedTotalMass: req.body.designAuthorizedTotalMass,
        designAuthorizedTowedMass: req.body.designAuthorizedTowedMass,
        permissibleNoOfPersCarried: req.body.permissibleNoOfPersCarried,
        typeOfFuelUsed: req.body.typeOfFuelUsed,
        engineDisplacement: req.body.engineDisplacement,
        maxOutputRpm: req.body.maxOutputRpm,
        no: req.body.no,
        numberOfTires1: req.body.numberOfTires1,
        numberOfTires2: req.body.numberOfTires2,
        inspectionReportNo: req.body.inspectionReportNo,
        inspectionCenter: req.body.inspectionCenter,
        validUntil: req.body.validUntil,
        picture: req.body.picture,
        equippedWithTachograph: req.body.equippedWithTachograph,
        inspectionStamp: req.body.inspectionStamp,
        note: req.body.note
    });
    try {
        await formData.save();
        res.send("inserted data..");
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

app.get("/vehicleinfo", async (req, res) => {
    try {
        const vehiclesList = await VehicleInfo.find().exec();
        console.log(JSON.stringify(vehiclesList));
        res.json(vehiclesList);
    } catch (err) {
        res.status();
    }
});

app.post("/newvehicle", async (req, res) => {
    const formData = new Vehicle({
        registrationPlate: req.body.registrationPlate,
        registrationDate: req.body.registrationDate,
        brand: req.body.brand,
        owner: req.body.owner,
        address: req.body.address,
        inspectionDate: req.body.inspectionDate,
        inspectionUnit: req.body.inspectionUnit,
        inspectionNumber: req.body.inspectionNumber,
        certificateExpiration: req.body.certificateExpiration
    });
    try {
        await formData.save();
        res.send("inserted data..");
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

app.get("/vehicles", async (req, res) => {
    try {
        const vehiclesList = await Vehicle.find().exec();
        console.log(JSON.stringify(vehiclesList));
        res.json(vehiclesList);
    } catch (err) {
        res.status();
    }
});

app.post("/updvehicles", async (req, res) => {
    try {
        const accountList = await Vehicle.updateMany({
            registrationPlate: req.body.registrationPlate
        }, {
            registrationPlate: req.body.registrationPlate,
            registrationDate: req.body.registrationDate,
            brand: req.body.brand,
            owner: req.body.owner,
            address: req.body.address,
            inspectionDate: req.body.inspectionDate,
            inspectionUnit: req.body.inspectionUnit,
            inspectionNumber: req.body.inspectionNumber,
            certificateExpiration: req.body.certificateExpiration
        }).exec();
        console.log(JSON.stringify(accountList));
        res.json(accountList);
    } catch (err) {
        res.status();
    }
});

app.post("/delvehicle", async (req, res) => {
    try {
        const accountList = await Vehicle.deleteOne({
            registrationPlate: req.body.registrationPlate
        }).exec();
        console.log(JSON.stringify(accountList));
        res.json(accountList);
    } catch (err) {
        res.status();
    }
})

app.post("/newregisloc", async (req, res) => {
    const formData = new InspectionUnit({
        inspectionUnit: req.body.inspectionUnit,
        address: req.body.address,
    });
    try {
        await formData.save();
        res.send("inserted data..");
    } catch (err) {
        console.log(err);
    }
});

app.get("/regisloc", async (req, res) => {
    try {
        const regislocList = await InspectionUnit.find().exec();
        console.log(JSON.stringify(regislocList));
        res.json(regislocList);
    } catch (err) {
        res.status();
    }
});

app.post("/auth", async (req, res) => {
    const accoun = req.body.acc;
    const passw = req.body.pwd;

    try {
        const accountList = await Account.find({
            account: accoun,
            password: passw,
        }).exec();
        console.log(JSON.stringify(accountList));
        res.json(accountList);
    } catch (err) {
        res.status();
    }
});

app.post("/authn", async (req, res) => {
    const level = req.body.n;

    try {
        const accountList = await Account.find({
            roles: level
        }).exec();
        console.log(JSON.stringify(accountList));
        res.json(accountList);
    } catch (err) {
        res.status();
    }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
