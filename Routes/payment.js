const express = require("express");
const crypto = require("crypto")
const Razorpay = require("razorpay")
require("dotenv").config()
const app = express();

app.use(express.json());

var instance = new Razorpay({key_id: process.env.KEYID, key_secret: process.env.SECRETKEY})

app.post("/order", async (req, res) => {
    try {
        const options = {
            amount: 100,
            currency: "INR"

        };
        const order = await instance.orders.create(options);
        if (! order) {
            return res.status(500).json({message: "somethng went wrong!"})
        }
        return res.status(200).json(order)

    } catch (err) {
        return res.status(501).json(err)
    }
})

app.post("/verify", async (req, res) => {
    try {
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
            amount,
            currency
        } = req.body;
        const signature = crypto.createHmac("sha256", process.env.SECRETKEY);
        signature.update(`${orderCreationId} | ${razorpayPaymentId}`)
        const digest = signature.digest("hex");
        if (digest !== razorpaySignature) {
            return res.status(400).json({message: "Transaction not legit!"})
        }
        const captureResponse = await instance.payment.capture(razorpayPaymentId, amount, currency)
        return res.status(200).json({status: "Succes", orderId: razorpayOrderId, paymentId: razorpayPaymentId, captureResponse})

    } catch (err) {
        return res.status(501).json(err)
    }
})


module.exports = app;
