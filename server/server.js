const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Account = require('./models/ReactDataSchema')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/testDB', { useNewUrlParser: true });

app.post('/insert', async (req, res) => {

    const FirstName = req.body.firstName
    const CompanyRole = req.body.companyRole
    console.log(FirstName, CompanyRole)
    const formData = new Account(
        {
            name: FirstName,
            role: CompanyRole
        }
    )
    try {

        await formData.save();
        res.send("inserted data..")

    } catch (err) {
        console.log(err)
    }
});

app.post("/data", async (req, res) => {
    const FirstName = req.body.firstName
    const CompanyRole = req.body.companyRole

    try {
        const accountList = await Account.find({ acc: FirstName, pass: CompanyRole }).exec();
        console.log(JSON.stringify(accountList));
        res.json(accountList);
    } catch (err) {
        res.status()
    }

});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});