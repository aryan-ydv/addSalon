const express = require("express");
require("dotenv").config()
const Orders = require("../models/orders")
const app = express();

app.use(express.json());


// posting data
app.post("/order", async (req, res) => {
    try {
        const {
            facilities,
            price,
            salonName,
            service,
            state,
            paid
        } = req.body;
        const order = new Orders({
            facilities,
            price,
            salonName,
            service,
            state,
            paid
        })
        const orderExist = await order.save()
        if (orderExist) {
            res.status(201).send(orderExist)
        } else {
            res.status(403).send("registration failed!")
        }
    } catch (err) {
        res.status(401).send("failed!")
    }
})

// deleting orders
app.delete("/deleteOrder/:id", async (req, res) => {
    try {
        const deleteUser = await Orders.findByIdAndDelete(req.params.id)
        res.status(201).send("deleted succesfully")
    } catch (err) {
        res.status(401).send(err)
    }
})
module.exports = app;
