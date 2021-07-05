const express = require("express");
const cors = require("cors");
const Contact= require("../../models/forms/contactUs")


const app = express();

app.use(express.json());
app.use(cors());

app.post("/contact",(req,res)=>{
    const{
        firstName,
        lastName,
        email,
        phone,
        comment,
    } = req.body;

    const contact =new Contact({
        firstName,
        lastName,
        email,
        phone,
        comment,
    })
    contact.save()
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(400).send(err);
    })

})

module.exports=app;