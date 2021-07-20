const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "signup"
    },
    // saloonId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "addSalon"
    // },
    // services: {
    //     ladiesServices: {},
    //     gentsServices: {}
    // },
    // timings: {},
    // payment: {
    //     type: Schema.Types.ObjectId,
    //     ref: "payment"
    // },
    // paid: {
    //     type: Boolean,
    //     default: false
    // }
    cartDetails: [
        {
            orderId: {
                type: Schema.Types.ObjectId,
                ref: "addSalon"
            },
            price: {
                type: Number
            },
            quantity: {
                type: Number
            },
            serviceName: {
                type: String
            },
            salonName: {
                type: String
            },
            location: {
                type: String
            },
            selectDate: {
                type: String

            },
            selectTime: {
                type: String

            }

        }
    ]
}, {timestamps: true});


const Order = mongoose.model('order', orderSchema);
module.exports = Order;
