const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({

    facilities: {
        ac: {
            type: Boolean,
            default: false
        },
        spa: {
            type: Boolean,
            default: false
        },
        sanitization: {
            type: Boolean,
            default: false
        },
        valetParking: {
            type: Boolean,
            default: false
        },
        pickDrop: {
            type: Boolean,
            default: false
        },
        spaRooms: {
            type: Boolean,
            default: false
        },
        steam: {
            type: Boolean,
            default: false
        },
        sauna: {
            type: Boolean,
            default: false
        },
        tv: {
            type: Boolean,
            default: false
        },
        washRoom: {
            type: Boolean,
            default: false
        },
        babyCare: {
            type: Boolean,
            default: false
        },
        shower: {
            type: Boolean,
            default: false
        }
    },
    price: {
        type: Number
    },
    salonName: {
        type: String
    },
    service: {
        type: String
    },
    state: {
        type: String
    },
    paid: {
        type: Boolean,
        default: false
    }


}, {timestamps: true})


const Order = mongoose.model("Order", ordersSchema);
module.exports = Order;
