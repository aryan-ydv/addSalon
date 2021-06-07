const express = require("express");
let AddSalon = require("../models/addSalon");
const app=express()

 app.use(express.json());



app.post("/", (req, res) => {
    const salonName = req.body.salonName;
    const city = req.body.city;
    const owner = req.body.owner;
    const timings = req.body.timings;
    const std = req.body.std;
    const phoneNumber = req.body.phoneNumber;
    const openingStatus = req.body.openingStatus;
    const address = req.body.address;
  
    const state = req.body.state;
    const pinCode = req.body.pinCode;
    const facilities = req.body.facilities;
    const ladiesServices = req.body.ladiesServices;
    const gentsServices = req.body.gentsServices;
    const payments = req.body.payments;
    const salonEmail = req.body.salonEmail;
    const salonWebsite = req.body.salonWebsite;
    const addsalon = new AddSalon({
      timings,
      std,
      state,
      salonName,
      openingStatus,
      pinCode,
      phoneNumber,
      owner,
      city,
      facilities,
      address,
      ladiesServices,
      gentsServices,
      payments,
      salonEmail,
      salonWebsite,
      
    });
    addsalon
      .save()
      .then(() => {
        res.json({ message: "salon data is added!" });
      })
      .catch((err) => {
        res.json(err);
      });
  });


  
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