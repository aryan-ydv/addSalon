const mongoose = require("mongoose");
const salonSchema = new mongoose.Schema({
  gentsServices: {
    hairStyling: [
      {
        type: String,
      },
    ],
    
  },
});

const Salon = mongoose.model("salon", salonSchema);

module.exports = Salon;