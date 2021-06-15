const express = require("express");
const cors = require("cors");
const QuickBooking = require("../../models/forms/quick-booking")


const app = express();

app.use(express.json());
app.use(cors());

//post
app.post("/quickBooking",(req,res)=>{
    const{
        fullName,
        contact,
        emailId,
        city,
        gender,
        selectService,
        datePicker,
        timer,
    } = req.body;

    const quickbooking =new QuickBooking({
        fullName,
        contact,
        emailId,
        city,
        gender,
        selectService,
        datePicker,
        timer,
    })
    quickbooking.save()
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(400).send(err);
    })

})

module.exports=app;