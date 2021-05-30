const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const validator = require('mongoose-validator')

const signupSchema=new Schema({
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
      unique: true
        
      },
   password: {
    type: String,
    required: true
  },
});


 const Signup =mongoose.model('signup',signupSchema);
 module.exports=Signup;

 


































































