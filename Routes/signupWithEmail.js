const express = require("express");
const cors = require("cors");
const User = require("../models/signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Domain = 'sandboxabe5396b8ab4468c8147872232d12e62.mailgun.org';
var mg = require('mailgun-js')({apiKey: process.env.API_key, domain: Domain});
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup-email",(req,res)=>{
    const {email,phoneNumber,password}=req.body;
    User.findOne({email}).exec((err,user)=>{
        if(user){
         return  res.status(400).json("user is already exists with this email")
        }
        //for generating 6-digit random-number
        function generate() {
            return Math.floor(Math.floor(100000 + Math.random() * 900000));
          }
         // console.log(generate());

        const token=jwt.sign({email,phoneNumber,password}, process.env.JWT_ACC_ACTIVATE,{expiresIn: '20m'});
        const data={
            from: 'noreply@hello.com',
            to: email,
            subject: "Accept Activation link",
            html:`
                  <p>This is you veriffication code</p>
                  <p>${generate()}></p>
            
             `
        };
        mg.messages().send(data, function(error,body){
            if(error){
                return res.json({
                    error: error.message
                })
            }
            return  res.json({message: "email has been sent to your mail id"});
        })
    })
})

module.exports=app;  