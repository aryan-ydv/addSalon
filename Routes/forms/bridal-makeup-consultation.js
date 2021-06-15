const express = require("express");
const cors = require("cors");
const BridalMakeup= require("../../models/forms/bridal-makeup-consultation")


const app = express();

app.use(express.json());
app.use(cors());

//post
app.post("/bridalmakeup",(req,res)=>{
    const{
        firstName,
        lastName,
        email,
        phone,
    } = req.body;

    const bridalmakeup =new BridalMakeup({
        firstName,
        lastName,
        email,
        phone,
    })
    bridalmakeup.save()
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(400).send(err);
    })

})

module.exports=app;