const express = require("express");
let AddSalon = require("../models/addSalon");
const app=express()
app.use(express.json());

//services-rendering
app.get("/ladies/:service", async (req, res) => {
    const service = req.params.service;

    if(service === 'hair-styling'){
        const hairStylingServices = await AddSalon.find();
        let data = hairStylingServices.filter((service)=>{
            return (
                service.ladiesServices.hairStyling.hairCut ||
                service.ladiesServices.hairStyling.ironing ||
                service.ladiesServices.hairStyling.globalColouring ||
                service.ladiesServices.hairStyling.blowDry ||
                service.ladiesServices.hairStyling.rootTouchUp ||
                service.ladiesServices.hairStyling.shampooConditioning ||
                service.ladiesServices.hairStyling.headMassage ||
                service.ladiesServices.hairStyling.rollerSetting ||
                service.ladiesServices.hairStyling.oiling
            )
        });
        res.json({ data });
    }

    if(service === 'makeUp'){
        const makeUpServices = await AddSalon.find();
        let data = makeUpServices.filter((service)=>{
            return (
                service.ladiesServices.makeUp.partyMakeUp ||
                service.ladiesServices.makeUp.engagementMakeUp ||
                service.ladiesServices.makeUp.bridalReceptionMakeUp ||
                service.ladiesServices.makeUp.baseMakeUp ||
                service.ladiesServices.makeUp.eyeMakeUp
            )
        });
        res.json({ data });
    }

    if(service === 'hairTexture'){
        const hairTextureServices = await AddSalon.find();
        let data = hairTextureServices.filter((service)=>{
            return (
                service.ladiesServices.hairTexture.rebonding ||
                service.ladiesServices.hairTexture.perming ||
                service.ladiesServices.hairTexture.keratin ||
                service.ladiesServices.hairTexture.colourProtection ||
                service.ladiesServices.hairTexture.smoothening
            )
        });
        res.json({ data });
    }

    if(service === 'hairTreatments'){
        const hairTreatmentsServices = await AddSalon.find();
        let data = hairTreatmentsServices.filter((service)=>{
            return (
                service.ladiesServices.hairTreatments.spaTreatments ||
                service.ladiesServices.hairTreatments.volumizing ||
                service.ladiesServices.hairTreatments.advancedHairMoisturising ||
                service.ladiesServices.hairTreatments.scalpTreatments
            )
        });
        res.json({ data });
    }

    if(service === 'facialsRituals'){
        const facialsRitualsServices = await AddSalon.find();
        let data = facialsRitualsServices.filter((service)=>{
            return (
                service.ladiesServices.facialsRituals.bleach ||
                service.ladiesServices.facialsRituals.luxuryFacialsRituals ||
                service.ladiesServices.facialsRituals.cleanUps ||
                service.ladiesServices.facialsRituals.bodyPolishingRejuvenation ||
                service.ladiesServices.facialsRituals.threading
            )
        });
        res.json({ data });
    }

    if(service === 'nailCare'){
        const nailCareServices = await AddSalon.find();
        let data = nailCareServices.filter((service)=>{
            return (
                service.ladiesServices.nailCare.nailPaint ||
                service.ladiesServices.nailCare.nailArt ||
                service.ladiesServices.nailCare.nailFilling
            )
        });
        res.json({ data });
    }

    res.json({ message: "No Data Found", data:[] });
});


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
        res.json({ message: "salon data is added!", data:addsalon });
      })
      .catch((err) => {
        res.json(err);
      });
  });


  

  
  module.exports=app;