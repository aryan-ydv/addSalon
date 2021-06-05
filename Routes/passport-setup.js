const passport=require("passport");
require("dotenv").config()
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback: true
    
},function(request,accestoken,refreshtoken,profile,done){
   console.log(profile)
   return done(null,profile)
}
))