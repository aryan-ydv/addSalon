const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const signupSchema=new Schema({
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
      unique: true
        
      },
      phoneNumber:{
        type: Number,
        required: true,
        unique: true,
      },
   password: {
    type: String,
    required: true
  },
 
}, {strict: true},{timestamps: true});


 const Signup =mongoose.model('signup',signupSchema);
 module.exports=Signup;

 


































































