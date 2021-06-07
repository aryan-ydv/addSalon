const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const signupGoogleSchema=new Schema({
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
      unique: true
        
      },
      name:{
        type: String,
        required: true,
      },
   password: {
    type: String,
    required: true
  },
 
},{timestamps: true});


 const Signup =mongoose.model('signupWithGoogle',signupGoogleSchema);
 module.exports=Signup;

 


































































