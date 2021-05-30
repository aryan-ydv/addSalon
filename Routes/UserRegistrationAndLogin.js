const express = require("express");
const cors = require("cors");
const Signup = require("../models/signup");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());
app.use(cors());

//signup
app.post("/jwt", async (req, res) => {
  const { email, password: plaintextpassword } = req.body;

  if(!email || typeof email !== 'string' ){
      return res.json({ status: 'error', error: 'Invalid Email'})
  }
  if(!plaintextpassword || typeof plaintextpassword !== 'string'){
    return res.json({ status: 'error', error: 'Invalid Password'})

  }

   if(plaintextpassword.length < 6){
    return res.json({ status: 'error', error: 'password is too small, should be atleast 6 characters!'})

   }
  const password = await bcrypt.hash(plaintextpassword, 10);
  try {
    const signup = await new Signup({
      email,
      password,
    });
    signup
      .save()
      .then((result) => {
          console.log(result);
        res.json("user created succesfully!");
      })
      .catch((error) => {
        res.json(error);
      });
  } catch(error) {
    if(error.code === 11000){
      return res.json({status: 'error', error: 'email alraedy exits!'})
    }
    throw error;
  }
});

module.exports = app;
