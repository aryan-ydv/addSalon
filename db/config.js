const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://dbm:rX0cgYBa8Hh2uvLN@bmmdb190521.0alne.mongodb.net/bmm?retryWrites=true&w=majority",{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connection is  established succesfully!!");
}).catch((err)=>{
   console.log(err);
})

/*app.post("/login", async (req, res) => {
  // console.log(process.env.JWT_SECRET);
  const { email, phoneNumber, password } = req.body;
  const userlogin = await User.findOne({ email, phoneNumber }).lean();

  if (!email) {
    return res.json({ status: "error", error: "Invalid Email/Passowrd" });
  }

  if (!phoneNumber) {
    return res.json({ status: "error", error: "Invalid phoneNumber/Passowrd" });
  }
  if (await bcrypt.compare(String(password), userlogin.password)) {
    const token = jwt.sign(
      {
        id: userlogin._id,
        email: userlogin.email,
        phoneNumber: userlogin.phoneNumber,
      },
      process.env.JWT_SECRET
    );

    return res.json({ status: "ok", token: token });
  }
  return res.json({
    status: "error",
    error: "Invalid Email/PhoneNumber/Passowrd",
  });
});
*/
