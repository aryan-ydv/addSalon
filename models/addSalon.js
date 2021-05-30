const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const addSalonSchema = new Schema({
  salonName: { type: String },
  City: { type: String },
  owner: { type: Boolean },
  std: { type: Number },
  phoneNumber: { type: Number },
  openingStatus: { type: Boolean },
  address: { type: String },
  state: { type: String },
  pinCode: { type: Number },
  facilities: {
    ac: { type: Boolean, default: false },
    spa: { type: Boolean, default: false },
    sanitization: { type: Boolean, default: false },
    valetParking: { type: Boolean, default: false },
  },

  LadiesServices: {
    hairstyling: {
      HairCut: { type: Boolean, default: false },
      Ironing: { type: Boolean, default: false },
      GlobalColouring: { type: Boolean, default: false },
      BlowDry: { type: Boolean, default: false },
      RootTouchUp: { type: Boolean, default: false },
      ShampooConditioning: { type: Boolean, default: false },
      HeadMassage: { type: Boolean, default: false },
      RollerSetting: { type: Boolean, default: false },
      Oiling: { type: Boolean, default: false },
    },
    makeup: {
      PartyMakeUp: { type: Boolean, default: false },
      EngagementMakeUp: { type: Boolean, default: false },
      BridalReceptionMakeUp: { type: Boolean, default: false },
      BaseMakeUp: { type: Boolean, default: false },
      EyeMakeUp: { type: Boolean, default: false },
    },
    HairTexture: {
      Rebonding: { type: Boolean, default: false },
      Perming: { type: Boolean, default: false },
      Keratin: { type: Boolean, default: false },
      ColourProtection: { type: Boolean, default: false },
      Smoothening: { type: Boolean, default: false },
    },
    HairTreatments: {
      SpaTreatments: { type: Boolean, default: false },
      Volumizing: { type: Boolean, default: false },
      AdvancedHairMoisturising: { type: Boolean, default: false },
      ScalpTreatments: { type: Boolean, default: false },
    },
    FacialsRituals: {
      Bleach: { type: Boolean, default: false },
      LuxuryFacialsRituals: { type: Boolean, default: false },
      CleanUps: { type: Boolean, default: false },
      BodyPolishingRejuvenation: { type: Boolean, default: false },
      Threading: { type: Boolean, default: false },
    },
    HandFeet: {
      Manicure: { type: Boolean, default: false },
      SpaPedicure: { type: Boolean, default: false },
      Pedicure: { type: Boolean, default: false },
      Waxing: { type: Boolean, default: false },
      SpaManicure: { type: Boolean, default: false },
    },
    NailCare: {
      NailPaint: { type: Boolean, default: false },
      NailArt: { type: Boolean, default: false },
      NailFilling: { type: Boolean, default: false },
    },
  },

  GentsServices: {
    HairCutFinish: {
      CutandHairCare: { type: Boolean, default: false },
      ShampooConditioning: { type: Boolean, default: false },
      HeadMassage: { type: Boolean, default: false },
      BeardStyling: { type: Boolean, default: false },
      HairBeardColouring: { type: Boolean, default: false },
    },
    HairColour: {
      HiLites: { type: Boolean, default: false },
      BeardColour: { type: Boolean, default: false },
      HairColourAmmoniaAmmoniaFree: { type: Boolean, default: false },
    },
    HairTexture: {
      Straightening: { type: Boolean, default: false },
      Smoothening: { type: Boolean, default: false },
      Rebonding: { type: Boolean, default: false },
      Perming: { type: Boolean, default: false },
    },
    HairTreatments: {
      HairSpa: { type: Boolean, default: false },
      AdvancedMoisturising: { type: Boolean, default: false },
      ScalpTreatments: { type: Boolean, default: false },
      ColourProtection: { type: Boolean, default: false },
    },
    SkinCare: {
      CleanUps: { type: Boolean, default: false },
      Facials: { type: Boolean, default: false },
      OrganicTreatments: { type: Boolean, default: false },
      Manicure: { type: Boolean, default: false },
      Pedicure: { type: Boolean, default: false },
    },
    BeardGrooming: {
      BeardTrim: { type: Boolean, default: false },
      BeardColour: { type: Boolean, default: false },
      BeardStyling: { type: Boolean, default: false },
      Shave: { type: Boolean, default: false },
      LuxuryShaveBeardSpa: { type: Boolean, default: false },
    },
  },

  timings: {
    Monday: { type: Boolean, default: false },
    Tuesday: { type: Boolean, default: false },
    Wednesday: { type: Boolean, default: false },
    Thursday: { type: Boolean, default: false },
    Friday: { type: Boolean, default: false },
    Saturday: { type: Boolean, default: false },
    Sunday: { type: Boolean, default: false },
    from: {type: Number},
    to: {type: Number},
  },
  payments: {
    DebitCardsCreditCard: { type: Boolean, default: false },
    MembershipCard: { type: Boolean, default: false },
    Cashonly: { type: Boolean, default: false },
  },

  salonEmail: { type: String },
  salonWebsite: { type: String },
});

const Salon = mongoose.model("addSalon", addSalonSchema);
module.exports = Salon;
