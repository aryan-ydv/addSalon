const express = require("express");
const cors = require("cors");
const ReferAndEarn = require("../../models/userSalonDashBoard/referandEarn")

const app = express();

app.use(express.json());
app.use(cors());

app.get("/referandearn", (req, res, next) => {
    ReferAndEarn.find().then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send(err);
    })

})
app.post("/referandearn", (req, res) => {
    const {name, email, phone} = req.body;

    const referandearn = new ReferAndEarn({name, email, phone})
    referandearn.save().then(result => {
        res.status(201).send(result);
    }).catch(err => {
        res.status(400).send(err);
    })

})
module.exports = app;
