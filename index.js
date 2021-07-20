const express = require("express");
require("./db/config");
const cors = require("cors");
const port = process.env.PORT || 3001;

const UserRegistrationAndLogin = require("./Routes/UserRegistrationAndLogin");
const addSalonApi = require("./Routes/addSalon");
const googlesignupApi = require("./Routes/googlesignupApi");
const Branchdetails = require("./Routes/addSalonDashboard/branchDetails")
const Timings = require("./Routes/addSalonDashboard/timings")
const Amenties = require("./Routes/addSalonDashboard/amenties")
const makeupconsultant = require("./Routes/forms/makeup-consultant")
const contactUs = require("./Routes/forms/contactUs");
const bridalMakeupConsultation = require("./Routes/forms/bridal-makeup-consultation")
const QuickBooking = require("./Routes/forms/quick-booking")
const Services = require("./Routes/addSalonDashboard/services")
const UserMakeupConsultant = require("./Routes/userDashBoard/makeupConsultant")
const ReferAndEarn = require("./Routes/userDashBoard/referandEarn")
const SubmitReview = require("./Routes/userDashBoard/submitReview")
const requireSignIn = require("./auth/requireSignIn")


require("dotenv").config()
const app = express();

// middlewares
app.use(express.json());
app.use(cors());


// routes
app.use('/UserRegistrationAndLogin', UserRegistrationAndLogin);
app.use("/api", googlesignupApi)
app.use("/addSalon", addSalonApi)
app.use("/makeup", makeupconsultant)
app.use("/contactUs", contactUs)
app.use("/bridalmakeupConsultation", bridalMakeupConsultation);
app.use("/quickbooking", QuickBooking)
app.use("/branchdetails", Branchdetails)
app.use("/amenties", Amenties)
app.use("/timings", Timings)
app.use("/services", Services)
app.use("/usermakeup", UserMakeupConsultant)
app.use("/referandearn", ReferAndEarn)
app.use("/submitreview", SubmitReview)


app.listen(port, () => {
    console.log(`app is running on ${port}`);
});


// function generate() {
// return Math.floor(Math.floor(100000 + Math.random() * 900000));
// }
// console.log(generate());
