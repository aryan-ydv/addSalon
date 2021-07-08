const express = require("express");
const SubmitReview = require("../../models/userSalonDashBoard/submitReview")
const app = express();

app.use(express.json());


app.post("/submitreview", (req, res) => {
    const review = req.body.review;

    const submitreview = new SubmitReview({review})
    submitreview.save().then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send(err);
    })

})

module.exports = app;
