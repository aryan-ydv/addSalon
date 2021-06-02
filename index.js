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
  AddSalon.find({}, {_id: 1, salonName : 1, GentsServices : 1, LadiesServices: 1 ,facilities:1})
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

function generate() {
  return Math.floor(Math.floor(100000 + Math.random() * 900000));
}
console.log(generate());
// const express = require("express");
// const bodyparser=require("body-parser");
// const app = express();
// const exphbs=require("express-handlebars");
// var messagebird=require("messagebird")('QEMFYz5QaOuxa1EhHJ3Hs8NmS')
// app.use(express.json());

// app.engine('handlebars' ,exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
// app.use(bodyparser.urlencoded({extended: true}))

// app.get("/",(req,res)=>{
//   res.render('step1')
// })

// app.post("/step2",(req,res)=>{
//     var number=req.body.number;

//     messagebird.verify.create(number,{
//         template: 'your %token is here'
//     }, function(err,response){
//         if(err){
//             console.log(err)
//             res.render('step1',{
//               error: err.errors[0].description
//             })
//         }
//         else{
//             console.log(response);
//             res.render('step2',{
//               id: response.id
//             })
//         }
//     })
// })

// // app.post("/step3",(req,res)=>{
// //     var id=req.body.id;
// //     var token=req.body.token;

// //  messagebird.verify.verify(id,token,function(err,response){
// //      if(err){
// //          res.render('step2',{
// //            error: err.errors[0].description,
// //            id :id
// //          });
// //      }
// //      else{
// //          res.render('stpe3');
// //      }
// //  });
// //     // messagebird.verify.create(number,{
// //     //     message: "your token is here"
// //     // }, function(err,response){
// //     //     if(err){
// //     //         console.log(err)
// //     //         res.send(err)
// //     //     }
// //     //     else{
// //     //         console.log(response);
// //     //         res.send(response.id)
// //     //     }
// //     // })
// // });
// // app.listen(5001,()=>{
// //   console.log("running")
// // });
