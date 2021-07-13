const express = require("express");
let AddSalon = require("../models/addSalon");
const requireSignIn = require("./UserRegistrationAndLogin")
const app = express()
app.use(express.json());

// services-rendering
app.get("/ladies/:service", async (req, res) => {
    const service = req.params.service;

    if (service === 'hair-styling') {
        const hairStylingServices = await AddSalon.find();
        let data = hairStylingServices.filter((service) => {
            return(service.ladiesServices.hairStyling.hairCut.value || service.ladiesServices.hairStyling.ironing.value || service.ladiesServices.hairStyling.globalColouring.value || service.ladiesServices.hairStyling.blowDry.value || service.ladiesServices.hairStyling.rootTouchUp.value || service.ladiesServices.hairStyling.shampooConditioning.value || service.ladiesServices.hairStyling.headMassage.value || service.ladiesServices.hairStyling.rollerSetting.value || service.ladiesServices.hairStyling.oiling.value)
        });
        res.status(200).json({data});
    }

    if (service === 'make-up') {
        const makeUpServices = await AddSalon.find();
        let data = makeUpServices.filter((service) => {
            return(service.ladiesServices.makeUp.partyMakeUp.value || service.ladiesServices.makeUp.engagementMakeUp.value || service.ladiesServices.makeUp.bridalReceptionMakeUp.value || service.ladiesServices.makeUp.baseMakeUp.value || service.ladiesServices.makeUp.eyeMakeUp.value)
        });
        res.status(200).json({data});
    }

    if (service === 'hair-texture') {
        const hairTextureServices = await AddSalon.find();
        let data = hairTextureServices.filter((service) => {
            return(service.ladiesServices.hairTexture.rebonding.value || service.ladiesServices.hairTexture.perming.value || service.ladiesServices.hairTexture.keratin.value || service.ladiesServices.hairTexture.colourProtection.value || service.ladiesServices.hairTexture.smoothening.value)
        });
        res.status(200).json({data});
    }

    if (service === 'hair-treatments') {
        const hairTreatmentsServices = await AddSalon.find();
        let data = hairTreatmentsServices.filter((service) => {
            return(service.ladiesServices.hairTreatments.spaTreatments.value || service.ladiesServices.hairTreatments.volumizing.value || service.ladiesServices.hairTreatments.advancedHairMoisturising.value || service.ladiesServices.hairTreatments.scalpTreatments.value)
        });
        res.status(200).json({data});
    }

    if (service === 'facials-rituals') {
        const facialsRitualsServices = await AddSalon.find();
        let data = facialsRitualsServices.filter((service) => {
            return(service.ladiesServices.facialsRituals.bleach.value || service.ladiesServices.facialsRituals.luxuryFacialsRituals.value || service.ladiesServices.facialsRituals.cleanUps.value || service.ladiesServices.facialsRituals.bodyPolishingRejuvenation.value || service.ladiesServices.facialsRituals.threading.value)
        });
        res.status(200).json({data});
    }

    if (service === 'nail-care') {
        const nailCareServices = await AddSalon.find();
        let data = nailCareServices.filter((service) => {
            return(service.ladiesServices.nailCare.nailPaint.value || service.ladiesServices.nailCare.nailArt.value || service.ladiesServices.nailCare.nailFilling.value)
        });
        res.status(200).json({data});
    }

    // res.status(200).json({ message: "No Data Found", data:[] });
});

app.get("/gents/:service", async (req, res) => {
    const service = req.params.service;

    if (service === 'hair-cut-finish') {
        const hairCutFinishServices = await AddSalon.find();
        let data = hairCutFinishServices.filter((service) => {
            return(service.gentsServices.hairCutFinish.cutandHairCare.value || service.gentsServices.hairCutFinish.shampooConditioning.value || service.gentsServices.hairCutFinish.headMassage.value || service.gentsServices.hairCutFinish.beardStyling.value || service.gentsServices.hairCutFinish.hairBeardColouring.value)
        });
        res.status(200).json({data});
    }

    if (service === 'hair-colour') {
        const hairColourServices = await AddSalon.find();
        let data = hairColourServices.filter((service) => {
            return(service.gentsServices.hairColour.hiLites.value || service.gentsServices.hairColour.beardColour.value || service.gentsServices.hairColour.hairColourAmmoniaAmmoniaFree.value)
        });
        res.status(200).json({data});
    }

    if (service === 'hair-texture') {
        const hairTextureServices = await AddSalon.find();
        let data = hairTextureServices.filter((service) => {
            return(service.gentsServices.hairTexture.rebonding.value || service.gentsServices.hairTexture.perming.value || service.gentsServices.hairTexture.straightening.value || service.gentsServices.hairTexture.smoothening.value)
        });
        res.status(200).json({data});
    }

    if (service === 'hairTreatments') {
        const hairTreatmentsServices = await AddSalon.find();
        let data = hairTreatmentsServices.filter((service) => {
            return(service.gentsServices.hairTreatments.spaTreatments.value || service.gentsServices.hairTreatments.volumizing.value || service.gentsServices.hairTreatments.advancedHairMoisturising.value || service.gentsServices.hairTreatments.scalpTreatments.value)
        });
        res.status(200).json({data});
    }

    if (service === 'skin-care') {
        const skinCareServices = await AddSalon.find();
        let data = skinCareServices.filter((service) => {
            return(service.gentsServices.skinCare.cleanUps.value || service.gentsServices.skinCare.facials.value || service.gentsServices.skinCare.organicTreatments.value || service.gentsServices.skinCare.manicure.value || service.gentsServices.skinCare.pedicure.value)
        });
        res.status(200).json({data});
    }

    if (service === 'nail-care') {
        const beardGroomingServices = await AddSalon.find();
        let data = beardGroomingServices.filter((service) => {
            return(service.gentsServices.beardGrooming.beardTrim.value || service.gentsServices.beardGrooming.beardColour.value || service.gentsServices.beardGrooming.beardStyling.value || service.gentsServices.beardGrooming.shave.value || service.gentsServices.beardGrooming.luxuryShaveBeardSpa.value)
        });
        res.status(200).json({data});
    }

    res.status(200).json({message: "No Data Found", data: []});
});

app.post("/:id", (req, res) => {
    const userId = req.params.id;
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
        userId,
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
        salonWebsite
    });
    addsalon.save().then(() => {
        res.status(200).json({message: "salon data is added!", data: addsalon});
    }).catch((err) => {
        res.status(400).json(err);
    });
});

module.exports = app;
