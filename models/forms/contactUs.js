const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactUsSchema = new Schema({
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
  comment:{
      type: String,
  },
 
});

const Contact = mongoose.model("contactusschema", contactUsSchema);
module.exports = Contact;
