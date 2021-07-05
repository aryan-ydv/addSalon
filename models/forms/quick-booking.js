const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quickBookingSchema = new Schema({
  fullName: {
    type: String,
  },
  contact: {
    type: Number,
  },
  city:{
   type: String,
  },
  email: {
    type: String,
    match: /.+\@.+\..+/,
  },
  gender:{
      type: String,
  },
  selectService:{
      type: String,
  },
  datePicker:{
      type: String
  },
  timer:{
      type: String,
  }
 
});

const QuickBooking = mongoose.model("quickBookingSchema", quickBookingSchema);
module.exports = QuickBooking;
