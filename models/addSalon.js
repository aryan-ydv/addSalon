const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const addSalonSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref:"signup"},
  salonName: { type: String },
  city: { type: String },
  owner: { type: String },
  std: { type: Number },
  phoneNumber: { type: Number },
  openingStatus: { type: String },
  address: { type: String },
  state: { type: String },
  pinCode: { type: Number },
  facilities: {
    ac: { type: Boolean, default: false },
    spa: { type: Boolean, default: false },
    sanitization: { type: Boolean, default: false },
    valetParking: { type: Boolean, default: false },
  },

  ladiesServices: {
    hairStyling: {
      hairCut: { type: Boolean, default: false },
      ironing: { type: Boolean, default: false },
      globalColouring: { type: Boolean, default: false },
      blowDry: { type: Boolean, default: false },
      rootTouchUp: { type: Boolean, default: false },
      shampooConditioning: { type: Boolean, default: false },
      headMassage: { type: Boolean, default: false },
      rollerSetting: { type: Boolean, default: false },
      oiling: { type: Boolean, default: false },
    },
    makeUp: {
      partyMakeUp: { type: Boolean, default: false },
      engagementMakeUp: { type: Boolean, default: false },
      bridalReceptionMakeUp: { type: Boolean, default: false },
      baseMakeUp: { type: Boolean, default: false },
      eyeMakeUp: { type: Boolean, default: false },
    },
    hairTexture: {
      rebonding: { type: Boolean, default: false },
      perming: { type: Boolean, default: false },
      keratin: { type: Boolean, default: false },
      colourProtection: { type: Boolean, default: false },
      smoothening: { type: Boolean, default: false },
    },
    hairTreatments: {
      spaTreatments: { type: Boolean, default: false },
      volumizing: { type: Boolean, default: false },
      advancedHairMoisturising: { type: Boolean, default: false },
      scalpTreatments: { type: Boolean, default: false },
    },
    facialsRituals: {
      bleach: { type: Boolean, default: false },
      luxuryFacialsRituals: { type: Boolean, default: false },
      cleanUps: { type: Boolean, default: false },
      bodyPolishingRejuvenation: { type: Boolean, default: false },
      threading: { type: Boolean, default: false },
    },
    handFeet: {
      manicure: { type: Boolean, default: false },
      spaPedicure: { type: Boolean, default: false },
      pedicure: { type: Boolean, default: false },
      waxing: { type: Boolean, default: false },
      spaManicure: { type: Boolean, default: false },
    },
    nailCare: {
      nailPaint: { type: Boolean, default: false },
      nailArt: { type: Boolean, default: false },
      nailFilling: { type: Boolean, default: false },
    },
  },

  gentsServices: {
    hairCutFinish: {
      cutandHairCare: { type: Boolean, default: false },
      shampooConditioning: { type: Boolean, default: false },
      headMassage: { type: Boolean, default: false },
      beardStyling: { type: Boolean, default: false },
      hairBeardColouring: { type: Boolean, default: false },
    },
    hairColour: {
      hiLites: { type: Boolean, default: false },
      beardColour: { type: Boolean, default: false },
      hairColourAmmoniaAmmoniaFree: { type: Boolean, default: false },
    },
    hairTexture: {
      straightening: { type: Boolean, default: false },
      smoothening: { type: Boolean, default: false },
      rebonding: { type: Boolean, default: false },
      perming: { type: Boolean, default: false },
    },
    hairTreatments: {
      hairSpa: { type: Boolean, default: false },
      advancedMoisturising: { type: Boolean, default: false },
      scalpTreatments: { type: Boolean, default: false },
      colourProtection: { type: Boolean, default: false },
    },
    skinCare: {
      cleanUps: { type: Boolean, default: false },
      facials: { type: Boolean, default: false },
      organicTreatments: { type: Boolean, default: false },
      manicure: { type: Boolean, default: false },
      pedicure: { type: Boolean, default: false },
    },
    beardGrooming: {
      beardTrim: { type: Boolean, default: false },
      beardColour: { type: Boolean, default: false },
      beardStyling: { type: Boolean, default: false },
      shave: { type: Boolean, default: false },
      luxuryShaveBeardSpa: { type: Boolean, default: false },
    },
  },

  timings: {
    monday: { type: Boolean, default: false },
    tuesday: { type: Boolean, default: false },
    wednesday: { type: Boolean, default: false },
    thursday: { type: Boolean, default: false },
    friday: { type: Boolean, default: false },
    saturday: { type: Boolean, default: false },
    sunday: { type: Boolean, default: false },
    from: {type: String},
    to: {type: String},
  },
  payments: {
    debitCardsCreditCard: { type: Boolean, default: false },
    membershipCard: { type: Boolean, default: false },
    cashonly: { type: Boolean, default: false },
  },

  salonEmail: { type: String },
  salonWebsite: { type: String },
});

const Salon = mongoose.model("addSalon", addSalonSchema);
module.exports = Salon;