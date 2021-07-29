const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dbm:rX0cgYBa8Hh2uvLN@bmmdb190521.0alne.mongodb.net/bmm?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection is  established succesfully!!");
}).catch((err) => {
    console.log(err);
})
