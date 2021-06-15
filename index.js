const express = require("express");
require("./db/config");
const cors = require("cors");
const port = process.env.PORT || 3001;
const UserRegistrationAndLogin=  require("./Routes/UserRegistrationAndLogin");
const addSalonApi=require("./Routes/addSalon");
const googlesignupApi = require("./Routes/googlesignupApi")
const makeupconsultant=require("./Routes/forms/makeup-consultant")
const contactUs=require("./Routes/forms/contactUs");
const bridalMakeupConsultation=require("./Routes/forms/bridal-makeup-consultation")
const QuickBooking =require("./Routes/forms/quick-booking")
require("dotenv").config()
const app = express();

//middlewares
app.use(express.json());
app.use(cors());


//routes
app.use('/UserRegistrationAndLogin',UserRegistrationAndLogin);
app.use("/api",googlesignupApi)
app.use("/addSalon",addSalonApi)
app.use("/makeup",makeupconsultant)
app.use("/contactUs",contactUs)
app.use("/bridalmakeupConsultation",bridalMakeupConsultation);
app.use("/quickbooking",QuickBooking)


app.listen(port, () => {
  console.log(`app is running on ${port}`);
});



// function generate() {
//   return Math.floor(Math.floor(100000 + Math.random() * 900000));
// }
// console.log(generate());

