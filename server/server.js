
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Vehicle = require('./models/ReactDataSchema')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/testDB', { useNewUrlParser: true});

app.post('/insert', async(req, res) => {

    const FirstName = req.body.firstName
    const CompanyRole = req.body.companyRole
    console.log(FirstName, CompanyRole)
    const formData  =  new Vehicle(
        {
            name: FirstName,
            role: CompanyRole
        }
    )
    try {
     
        await formData.save();
        res.send("inserted data..")

    } catch(err){
        console.log(err)
    }
});

app.get("/data", async(req, res) => {
    try {
        const vehicleList = await Vehicle.find({ name: "tesst" }).exec();
        console.log(JSON.stringify(vehicleList));
        res.json(JSON.stringify(vehicleList)); 
    } catch(err){
        console.log(err)
    }

});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});