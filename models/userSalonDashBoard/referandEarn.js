const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const referAndEarnSchema = new Schema({

    name: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String,
        match: /.+\@.+\..+/
    }
});

const ReferAndEarn = mongoose.model("refer&Earn", referAndEarnSchema);
module.exports = ReferAndEarn;
