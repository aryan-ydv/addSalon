const express = require("express");
const AddSalon = require("../../models/addSalon");
const app = express()

app.use(express.json());


app.get("/timings/:id", async (req, res) => {

    const response = await AddSalon.findOne({userId: req.params.id}).populate('userId');
    if (response) {
        const timings = response.timings;

        return res.status(200).send(timings);
    } else {
        return res.status(200).send("error");
    }

})

app.put("/timings/:id", async (req, res) => {
    const timings = req.body.timings;
    const response = await AddSalon.updateOne({
        userId: req.params.id
    }, {
        timings
    }, {new: true})
    console.log(response)

    if (response) {
        return res.status(200).send({message: "details updated successfully!"})
    } else {
        return res.status(400).send({message: "Error!"})
    }


})

module.exports = app;
