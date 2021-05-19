const express =require("express");
require("./db/config");
const port =process.env.PORT || 5000;
let AddSalon = require("./models/addSalon");
const app=express();
app.use(express.json());

app.get("/", (req, res) => {
    AddSalon.find()
    .then((exercise) => {
      res.json(exercise);
    })
    .catch((err) => {
      res.status(400).json("Error", +err);
    });
});

app.post("/addsalon", (req, res) => {
    const {
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
      } = req.body;
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