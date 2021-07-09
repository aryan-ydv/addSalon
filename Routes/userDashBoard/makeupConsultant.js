const express = require("express");
const cors = require("cors");
const MakeupConsultant = require("../../models/userSalonDashBoard/makeup-consultant")


const app = express();

app.use(express.json());
app.use(cors());

app.post("/userMakeup", (req, res) => {
    const comment = req.body.comment;

    const makeupconsultant = new MakeupConsultant({comment})
    makeupconsultant.save().then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send(err);
    })

})

module.exports = app;
