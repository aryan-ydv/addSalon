const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bridalMakeupSchema = new Schema({
    
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phone:{
   type: Number,
  },
  email: {
    type: String,
    match: /.+\@.+\..+/,
  },
});

const BridalMakeup = mongoose.model("bridalmakeupSchema", bridalMakeupSchema);
module.exports = BridalMakeup;
