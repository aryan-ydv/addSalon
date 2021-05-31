const express = require("express");
const cors = require("cors");
const User = require("../models/signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
app.use(cors());

// const JWT_SECRET = "sbjkdNDJJalsanxxmxZmxkdqmmxl,xslcmascms;sXMAS";
app.post("/login", async (req, res) => {
  const { email, phoneNumber, password } = req.body;
  const userlogin = await User.findOne({ email ,phoneNumber}).lean();

  if (!email) {
    return res.json({ status: "error", error: "Invalid Email/Passowrd" });
  }
   
  if(! phoneNumber){
    return res.json({ status: "error", error: "Invalid phoneNumber/Passowrd" });
  }
  if (await bcrypt.compare(password, userlogin.password)) {
    const token = jwt.sign(
      {
        id: userlogin._id,
        email: userlogin.email,
        phoneNumber: userlogin.phoneNumber,
      },
      process.env.JWT_SECRET
    );

    return res.json({ status: "ok", token: token });
  }
  return res.json({ status: "error", error: "Invalid Email/PhoneNumber/Passowrd" });
});

//signup
app.post("/signup", async (req, res) => {
  const { email, phoneNumber, password: plaintextpassword } = req.body;

  const oldUser = await User.findOne({ email: email });
  
  if (oldUser) {
    return res.json({
      status: "error",
      error: "Email Already Exist",
    });
  
  } 
  const oldphonenumber=await User.findOne({phoneNumber: phoneNumber});
  if (oldphonenumber) {
    return res.json({
      status: "error",
      error: "PhoneNumber Already Exist",
    });
  }
  else {

    if (!email || typeof email !== "string") {
      return res.json({ status: "error", error: "Invalid Email" });
    }
    if (!plaintextpassword || typeof plaintextpassword !== 'number') {
      return res.json({ status: "error", error: "Invalid password" });
    }
    if (!phoneNumber || typeof phoneNumber !== 'number') {

      return res.json({
         status: 401,
       message: "Invalid phoneNumber it should be Number type" });
    }
    if (!plaintextpassword ) {
      return res.json({ status: "error", error: "passoword should be entered" });
    }

    if (String(plaintextpassword).length !== 6) {
      return res.json({
        status: "error",
        error: "password should be exact 6 Numbers!",
      });
    }
    
    if (String(phoneNumber).length !==10) {
      return res.json({
        status: 402,
        error: "phoneNumber is not valid, should be atleast 10 Numbers!",
      });
    }
    const password = await bcrypt.hash(String(plaintextpassword), 10);
    try {
      const signup = await new User({
        email,
        phoneNumber,
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
    } catch (error) {
      if (error.code === 11000) {
        return res.json({ status: "error", error: "email alraedy exits!" });
      }
      throw error;
    }
  }
});

module.exports = app;
