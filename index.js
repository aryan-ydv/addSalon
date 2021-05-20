const express =require("express");
require("./db/config");

const port =process.env.PORT || 3000;
let AddSalon = require("./models/addSalon");
const app=express();
require("dotenv").config();


app.use(express.json());

//to see all our data route
app.get("/get", (req, res) => {
    AddSalon.find()
    .then((exercise) => {
      res.json(exercise);
    })
    .catch((err) => {
      res.status(400).json("Error", +err);
    });
});

//for creating new addsalon data route
app.post("/addsalon", (req, res) => {
        const   timings =req.body.timings;
        const  std =req.body.std;
        const state =req.body.state;
        const skinCareGentsServices =req.body.skinCareGentsServices;
        const salonName= req.body.salonName;
        const salonEmail=req.body.salonEmail;
        const  pinCode=req.body.pinCode;
        const phoneNumber=req.body.phoneNumber;
        const payment=req.body.payment;
        const owner=req.body.owner;
        const openStatus=req.body.openStatus;
        const  nailCareLadiesServices =req.body.nailCareLadiesServices;
        const  makeUpLadiesServices=req.body.makeUpLadiesServices;
        const locationCity=req.body.locationCity;
        const handAndFeetLadiesServices=req.body.handAndFeetLadiesServices;
        const  hairTreatmentsGentsServices=req.body.hairTreatmentsGentsServices;
        const  hairTreatmentLadiesServices=req.body.hairTreatmentLadiesServices;
        const hairTextureLadiesServices=req.body.hairTextureLadiesServices;
        const  hairTextureGentsServices = req.body.hairTextureGentsServices;
        const  hairStylingLadiesServices=req.body.hairStylingLadiesServices;
        const  hairCutAndFinishGentsServices=req.body.hairCutAndFinishGentsServices;
        const hairColourGentsServices=req.body.hairColourGentsServices;
        const  facilities=req.body.facilities
        const  facialsAndRitualsLadiesServices=req.body.facialsAndRitualsLadiesServices;
        const  beardGroomingGentsServices=req.body.beardGroomingGentsServices;
        const address=req.body.address;
        const salonWebsite=req.body.salonWebsite;
        const  location=req.body.location;

      const addsalon= new AddSalon({
        timings,
        std,
        state,
        skinCareGentsServices,
        salonName,
        salonEmail,
        pinCode,
        phoneNumber,
        payment,
        owner,
        openStatus,
        nailCareLadiesServices,
        makeUpLadiesServices,
        locationCity,
        handAndFeetLadiesServices,
        hairTreatmentsGentsServices,
        hairTreatmentLadiesServices,
        hairTextureLadiesServices,
        hairTextureGentsServices,
        hairStylingLadiesServices,
        hairCutAndFinishGentsServices,
        hairColourGentsServices,
        facilities,
        facialsAndRitualsLadiesServices,
        beardGroomingGentsServices,
        address,
        salonWebsite,
        location,
      });
      addsalon.save()
      .then(()=>{
          res.json("salon data is added!")
      })
      .catch((err)=>{
          res.json(err);
      })

});

app.listen(port,()=>{
    console.log(`app is running on ${port}`);
})