const express = require("express");
require("./db/config");
const cors = require("cors");
const port = process.env.PORT || 3000;
let AddSalon = require("./models/addSalon");
const Signup = require("./models/signup");
const UserRegistrationAndLogin=  require("./Routes/UserRegistrationAndLogin");
const app = express();

app.use(express.json());
app.use(cors());

//routes
app.use('/UserRegistrationAndLogin',UserRegistrationAndLogin);

//to see all our data route
app.get("/", (req, res) => {
  AddSalon.find()
    .then((exercise) => {
      res.json(exercise);
    })
    .catch((err) => {
      res.json(err);
    });
});


//specific-field rendering api
app.get("/renderData", (req, res) => {

  AddSalon.find({}, {_id: 1, salonName : 1, GentsServices : 1, LadiesServices: 1 })
  .then((exercise) => {
    res.json(exercise);
  })
  .catch((err) => {
    res.json(err);
  });
});



//search-field  api
// app.get("/search/:address", (req, res) => {
//   // const searchField=req.params.salonName;
//   // AddSalon.find({salonName: {$regex: searchField ,options: '$i'}})
//   var regex=new RegExp(req.params.address, 'i');
//     AddSalon.find({address: regex})
//     .then(result => {
//       res.json(result);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });


//for creating new addsalon data route
app.post("/addsalon", (req, res) => {
  const salonName = req.body.salonName;
  const City = req.body.City;
  const owner = req.body.owner;
  const timings = req.body.timings;
  const std = req.body.std;
  const phoneNumber = req.body.phoneNumber;
  const openingStatus = req.body.openingStatus;
  const address = req.body.address;

  const state = req.body.state;
  const pinCode = req.body.pinCode;
  const facilities = req.body.facilities;
  const LadiesServices = req.body.LadiesServices;
  const GentsServices = req.body.GentsServices;
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
    City,
    facilities,
    address,
    LadiesServices,
    GentsServices,
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

  

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
