const express = require("express");
let Order = require("../models/order");
const app = express()
app.use(express.json());


// for listing of all orders
app.get("/cartList", (req, res) => {
    Order.find().then(result => {
        res.send(result)
    }).catch(err => {
        res.send(err)
    })

});


// for adding order-item into cart
app.post("/addToCart", async (req, res) => {
    const {
        orderId,
        quantity,
        salonName,
        serviceName,
        location,
        selectDate,
        selectTime,
        price,
        userId
    } = req.body;

    try {
        let cart = await Order.findOne({userId});

        if (cart) { // cart exists for user
            let itemIndex = cart.cartDetails.findIndex(p => p.orderId == orderId);

            if (itemIndex > -1) { // product exists in the cart, update the quantity
                let productItem = cart.cartDetails[itemIndex];
                productItem.quantity = quantity;
                cart.cartDetails[itemIndex] = productItem;
            } else { // product does not exists in cart, add new item
                cart.cartDetails.push({
                    orderId,
                    quantity,
                    salonName,
                    serviceName,
                    location,
                    selectDate,
                    selectTime,
                    price
                });
            } cart = await cart.save();
            return res.status(201).send(cart);
        } else { // no cart for user, create new cart
            const newCart = await new Order({
                userId,
                cartDetails: [
                    {
                        orderId,
                        salonName,
                        quantity,
                        serviceName,
                        location,
                        selectDate,
                        selectTime,
                        price
                    }
                ]
            });

            return res.status(201).send(newCart);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
});
module.exports = app;
