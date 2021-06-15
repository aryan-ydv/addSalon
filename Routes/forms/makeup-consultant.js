const express = require("express");
const cors = require("cors");
const MakeUp= require("../../models/forms/makeup-consultant")


const app = express();

app.use(express.json());
app.use(cors());

//gets
app.get("/get",(req,res)=>{
  MakeUp.find()
  .then(result=>{
      res.send(result)
  })
  .catch(err=>{
      res.send(err)
  })
})

//form-adding
app.post("/makeupconsultant",(req,res)=>{
    const {
        fullName,
        phoneNumber,
        emailId,
        datePicker,
        preferedTime,
    } =req.body;

    const makeup=new MakeUp({
        fullName,
        phoneNumber,
        emailId,
        datePicker,
        preferedTime,
    })

    makeup.save()
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
})

module.exports=app;