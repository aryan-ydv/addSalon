const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const makeupConsultantSchema = new Schema({
  fullName: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  emailId: {
    type: String,
    match: /.+\@.+\..+/,
    unique: true,
  },
  datePicker:{
      type: String,
  },
  preferedTime: {
    type: String,
  },
});

const Makeup = mongoose.model("makeupconsultant", makeupConsultantSchema);
module.exports = Makeup;
