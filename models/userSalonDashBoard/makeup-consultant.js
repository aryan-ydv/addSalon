const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const makeUpConsultantSchema = new Schema({
    comment: {
        type: String
    }

});

const ConsultantSchema = mongoose.model("UserMakeupConsultant", makeUpConsultantSchema);
module.exports = ConsultantSchema;
