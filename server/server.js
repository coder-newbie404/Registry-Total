const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Account = require("./models/AccountDataSchema");
const InspectionUnit = require("./models/InspectionUnitFormDataSchema");
const Vehicle = require("./models/VehicleFormDataSchema");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/DB", { useNewUrlParser: true });

app.post("/newacc", async (req, res) => {
    const formData = new Account({
        account: req.body.acc,
        password: req.body.pwd,
        phoneNumber: req.body.phone,
        email: req.body.email,
        permission: 1,
    });
    try {
        await formData.save();
        res.send("inserted data..");
    } catch (err) {
        console.log(err);
    }
});

app.post("/newregisloc", async (req, res) => {
    const formData = new InspectionUnit({
        inspectionUnit: req.body.unit,
        address: req.body.addr,
    });
    try {
        await formData.save();
        res.send("inserted data..");
    } catch (err) {
        console.log(err);
    }
});

app.post("/newcerti", async (req, res) => {
    const formData = new Vehicle({
        registrationPlate: req.body.regisPlate,
        registrationDate: req.body.regisDate,
        brand: req.body.brd,
        owner: req.body.owner,
        address: req.body.addr,
        inspectionDate: req.body.ispDate,
        inspectionUnit: req.body.unit,
        inspectionNumber: req.body.ispNum,
        certificateExpiration: req.body.cerExpr,
    });
    try {
        await formData.save();
        res.send("inserted data..");
    } catch (err) {
        console.log(err);
        res.send(err);
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

app.get("/vehicleslst", async (req, res) => {
    try {
        const vehiclesList = await Vehicle.find().exec();
        console.log(JSON.stringify(vehiclesList));
        res.json(vehiclesList);
    } catch (err) {
        res.status();
    }
});

app.get("/regisloclst", async (req, res) => {
    try {
        const vehiclesList = await InspectionUnit.find().exec();
        console.log(JSON.stringify(vehiclesList));
        res.json(vehiclesList);
    } catch (err) {
        res.status();
    }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
