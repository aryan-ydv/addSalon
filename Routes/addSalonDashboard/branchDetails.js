const express = require("express");
const AddSalon = require("../../models/addSalon");
const SignUp=require("../../models/signup")
const app=express()

app.use(express.json());

app.get("/branchdetails/:id",async (req,res)=>{
    
   const response = await AddSalon.findOne({userId:req.params.id}).populate('userId');
   if(response){
       const ob = {
           phone:response.userId.phoneNumber,
           email:response.userId.email,
           address:response.address,
           city:response.city,
           state:response.state,
           pinCode:response.pinCode,

       }
       return res.status(200).send(ob);
   }else {
       return res.status(200).send({});
   }

})

app.put("/branchdetails/:id",async(req,res)=>{
     const name=req.body.name;
     const response = await SignUp.updateOne({_id:req.params.id},{
          name,
      },{ new : true })
      console.log(response)
      if(response){
        return res.status(200).send({message:"details updated successfully!"})
      }else{
        return res.status(400).send({message:"Error!"})
      }
    
     
})

module.exports=app;