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
        res.status(200).json({ data });
    }

    if(service === 'make-up'){
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
        res.status(200).json({ data });
    }

    if(service === 'hair-texture'){
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
        res.status(200).json({ data });
    }

    if(service === 'hair-treatments'){
        const hairTreatmentsServices = await AddSalon.find();
        let data = hairTreatmentsServices.filter((service)=>{
            return (
                service.ladiesServices.hairTreatments.spaTreatments ||
                service.ladiesServices.hairTreatments.volumizing ||
                service.ladiesServices.hairTreatments.advancedHairMoisturising ||
                service.ladiesServices.hairTreatments.scalpTreatments
            )
        });
        res.status(200).json({ data });
    }

    if(service === 'facials-rituals'){
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
        res.status(200).json({ data });
    }

    if(service === 'nail-care'){
        const nailCareServices = await AddSalon.find();
        let data = nailCareServices.filter((service)=>{
            return (
                service.ladiesServices.nailCare.nailPaint ||
                service.ladiesServices.nailCare.nailArt ||
                service.ladiesServices.nailCare.nailFilling
            )
        });
        res.status(200).json({ data });
    }

    res.status(200).json({ message: "No Data Found", data:[] });
});

app.get("/gents/:service", async (req, res) => {
    const service = req.params.service;

    if(service === 'hair-cut-finish'){
        const hairCutFinishServices = await AddSalon.find();
        let data = hairCutFinishServices.filter((service)=>{
            return (
                service.gentsServices.hairCutFinish.cutandHairCare ||
                service.gentsServices.hairCutFinish.shampooConditioning ||
                service.gentsServices.hairCutFinish.headMassage ||
                service.gentsServices.hairCutFinish.beardStyling ||
                service.gentsServices.hairCutFinish.hairBeardColouring
            )
        });
        res.status(200).json({ data });
    }

    if(service === 'hair-colour'){
        const hairColourServices = await AddSalon.find();
        let data = hairColourServices.filter((service)=>{
            return (
                service.gentsServices.hairColour.hiLites ||
                service.gentsServices.hairColour.beardColour ||
                service.gentsServices.hairColour.hairColourAmmoniaAmmoniaFree
            )
        });
        res.status(200).json({ data });
    }

    if(service === 'hair-texture'){
        const hairTextureServices = await AddSalon.find();
        let data = hairTextureServices.filter((service)=>{
            return (
                service.gentsServices.hairTexture.rebonding ||
                service.gentsServices.hairTexture.perming ||
                service.gentsServices.hairTexture.straightening ||
                service.gentsServices.hairTexture.smoothening
            )
        });
        res.status(200).json({ data });
    }

    if(service === 'hairTreatments'){
        const hairTreatmentsServices = await AddSalon.find();
        let data = hairTreatmentsServices.filter((service)=>{
            return (
                service.gentsServices.hairTreatments.spaTreatments ||
                service.gentsServices.hairTreatments.volumizing ||
                service.gentsServices.hairTreatments.advancedHairMoisturising ||
                service.gentsServices.hairTreatments.scalpTreatments
            )
        });
        res.status(200).json({ data });
    }

    if(service === 'skin-care'){
        const skinCareServices = await AddSalon.find();
        let data = skinCareServices.filter((service)=>{
            return (
                service.gentsServices.skinCare.cleanUps ||
                service.gentsServices.skinCare.facials ||
                service.gentsServices.skinCare.organicTreatments ||
                service.gentsServices.skinCare.manicure ||
                service.gentsServices.skinCare.pedicure
            )
        });
        res.status(200).json({ data });
    }

    if(service === 'nail-care'){
        const beardGroomingServices = await AddSalon.find();
        let data = beardGroomingServices.filter((service)=>{
            return (
                service.gentsServices.beardGrooming.beardTrim ||
                service.gentsServices.beardGrooming.beardColour ||
                service.gentsServices.beardGrooming.beardStyling ||
                service.gentsServices.beardGrooming.shave ||
                service.gentsServices.beardGrooming.luxuryShaveBeardSpa
            )
        });
        res.status(200).json({ data });
    }

    res.status(200).json({ message: "No Data Found", data:[] });
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
        res.status(200).json({ message: "salon data is added!", data:addsalon });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  module.exports=app;