const express = require("express");
const cors = require("cors");
const app=express()
const passport=require("passport");
require("./passport-setup")
require("dotenv").config()
app.use(express.json());
app.use(cors());

app.get("/google",passport.authenticate('google',{scope:['profile','email']}))