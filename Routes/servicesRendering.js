const express=require("express");
const app=express()
const Salon =require("../models/salon");

//services-rendering
app.get("/search", async (req, res) => {
    let gender = req.query.gender;
    let category = req.query.category;
    let service = req.query.service;
    console.log(gender, category, service);
    // console.log(genderType);
    // console.log(category);
    // res.send("skjflksjflks");
    // let hairStyles = new Salon({
    //   gentsServices: {
    //     hairStyle: ["style4", "style5", "style6"],
    //   },
    // });
  
    // await hairStyles.save();
  
    if (gender == "male" && category == "hairStyling") {
      const salons = await Salon.find({
        "gentsServices.hairStyling": service,
      });
      // const salons = await Salon.findById("60b93a956a4ce707d9c3a1a4");
      console.log(salons);
    }
  
    res.json({ message: "success" });
  });

  module.exports=app;