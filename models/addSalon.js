const mongoose=require("mongoose");

const Schema=mongoose.Schema;
const addSalonSchema=new Schema({
    timings:{type: String},
    std:{type: Number},
    state: {type: String},
    skinCareGentsServices: {type:String},
    salonName: {type: String},
    salonEmail: {type: String},
    pinCode: {type: Number},
    phoneNumber: {type: Number},
    payment: {type: String},
    owner: {type: String},
    openStatus: {type: String},
    nailCareLadiesServices: {type: String},
    makeUpLadiesServices: {type: String},
    City: {type: String},
    handAndFeetLadiesServices: {type: String},
    hairTreatmentsGentsServices: {type: String},
    hairTreatmentLadiesServices: {type: String},
    hairTextureLadiesServices : {type: String},
    hairTextureGentsServices: {type: String},
    hairStylingLadiesServices : {type: String},
    hairCutAndFinishGentsServices: {type: String},
    hairColourGentsServices: {type: String},
    facilities: {type: String},
    facialsAndRitualsLadiesServices: {type: String},
    beardGroomingGentsServices: {type: String},
    address: {type: String},
    salonWebsite: {type: String},
    location: {
        lat:{type:Number},
        long: {type:Number}
      },
});

 const Salon =mongoose.model('addSalon',addSalonSchema);
 module.exports=Salon;

 


































































