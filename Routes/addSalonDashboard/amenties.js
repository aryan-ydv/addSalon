const express = require("express");
const AddSalon = require("../../models/addSalon");
const SignUp = require("../../models/signup")
const app = express()

app.use(express.json());


app.get("/amenties/:id", async (req, res) => {

    const response = await AddSalon.findOne({userId: req.params.id}).populate('userId');
    if (response) {
        const facilities = response.facilities;

        return res.status(200).send(facilities);
    } else {
        return res.status(200).send({});
    }

})

app.put("/amenties/:id", async (req, res) => {

    const facilities = req.body.facilities;
    const response = await AddSalon.updateOne({
        userId: req.params.id
    }, {
        facilities
    }, {new: true})

    if (response) {
        return res.status(200).send({message: "details updated successfully!"})
    } else {
        return res.status(400).send({message: "Error!"})
    }


})
module.exports = app;
