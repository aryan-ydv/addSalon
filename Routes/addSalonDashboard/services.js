const express = require("express");
const AddSalon = require("../../models/addSalon");
const app = express()

app.use(express.json());


app.get("/services/:id", async (req, res) => {

    const response = await AddSalon.findOne({userId: req.params.id}).populate('userId');
    if (response) {
        const ladiesServices = response.ladiesServices;
        const gentsServices = response.gentsServices;

        return res.status(200).send({ladiesServices, gentsServices});
    } else {
        return res.status(200).send("error");
    }

})

app.put("/services/:id", async (req, res) => {
    const ladiesServices = req.body.ladiesServices;
    const gentsServices = req.body.gentsServices;

    const response = await AddSalon.updateOne({
        userId: req.params.id
    }, {
        ladiesServices,
        gentsServices
    }, {new: true})
    console.log(response)

    if (response) {
        return res.status(200).send({message: "services are updated successfully!"})
    } else {
        return res.status(400).send({message: "Error!"})
    }


})

module.exports = app;
