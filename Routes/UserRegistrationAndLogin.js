const express = require("express");
const cors = require("cors");
const User = require("../models/signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());


app.post("/login", async (req, res) => {

    const {emailOrPhoneNumber, password, role} = req.body;
    let userlogin = await User.findOne({email: emailOrPhoneNumber, role}).lean();

    if (! userlogin) {
        if (emailOrPhoneNumber.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && !(emailOrPhoneNumber.match(/0{5,}/))) {
            userlogin = await User.findOne({phoneNumber: emailOrPhoneNumber, role}).lean();
        }
    }
    if (! userlogin) {
        return res.status(400).json({status: "error", error: "Invalid Email/phoneNumber/Passowrd/Role"});
    }

    if (await bcrypt.compare(String(password), userlogin.password)) {
        const token = jwt.sign({
            id: userlogin._id,
            email: userlogin.email,
            phoneNumber: userlogin.phoneNumber
        }, process.env.JWT_SECRET);

        return res.status(200).json({status: "ok", token: token, user: userlogin});
    }
    return res.status(401).json({status: "error", error: "Invalid Email/phoneNumber/Passowrd/Role"});
});


// signup-route
app.post("/signup", async (req, res) => {
    const {email, phoneNumber, password: plaintextpassword, role} = req.body;

    const oldUser = await User.findOne({email: email});

    if (oldUser) {
        return res.status(400).json({status: "error", error: "Email Already Exist"});
    }
    const oldphonenumber = await User.findOne({phoneNumber: phoneNumber});
    if (oldphonenumber) {
        return res.status(400).json({status: "error", error: "PhoneNumber Already Exist"});
    } else {
        if (!email || typeof email !== "string") {
            return res.json({status: "error", error: "Invalid Email"});
        }

        if (!plaintextpassword) {
            return res.status(400).json({status: "error", error: "passoword should be entered"});
        }

        if (plaintextpassword.length !== 6) {
            return res.status(400).json({status: "error", error: "password should be exact 6 Numbers!"});
        }

        if (String(phoneNumber).length !== 10) {
            return res.status(400).json({status: 402, error: "phoneNumber is not valid, should be atleast 10 Numbers!"});
        }
        const password = await bcrypt.hash(String(plaintextpassword), 10);
        try {
            const signup = await new User({email, phoneNumber, password, role});
            signup.save().then((result) => {
                console.log(result);
                res.json("user created succesfully!");
            }).catch((error) => {
                res.json(error);
            });
        } catch (error) {
            if (error.code === 11000) {
                return res.status(400).json({status: "error", error: "email alraedy exits!"});
            }
            throw error;
        }
    }
});

module.exports = app;
