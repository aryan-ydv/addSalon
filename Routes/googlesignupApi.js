const express = require("express");
var bodyParser = require('body-parser')
const cors = require("cors");
const {OAuth2Client} = require("google-auth-library");
const SignUpGoogle = require("../models/signupGoogle");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const CLIENT_ID = "992991854071-nds54jj1itcd88f3fd8796ogn1dpbsjr.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

// google-signin-api
app.post("/googleLogin", (req, res) => {
    const tokenId = Object.keys(req.body)[0];
    // console.log("I am token",tokenId);

    client.verifyIdToken({idToken: tokenId, audience: "992991854071-nds54jj1itcd88f3fd8796ogn1dpbsjr.apps.googleusercontent.com"}).then((response) => {
        const {email_verified, name, email} = response.payload;
        if (email_verified) {
            SignUpGoogle.findOne({email}).exec((err, user) => {
                if (err) {
                    return res.status(400).json({message: "sommething went wrong"})
                } else {
                    if (user) {
                        const token = jwt.sign({
                            _id: user._id
                        }, process.env.JWT_SIGNIN_KEY, {expiresIn: '7d'});
                        const {_id, email} = user;
                        res.json({
                            token,
                            user: {
                                _id,
                                name,
                                email
                            }
                        })
                    } else {
                        let password = email + process.env.JWT_SIGNIN_KEY;
                        let newUser = new SignUpGoogle({name, email, password})
                        newUser.save((err, data) => {
                            if (err) {
                                return res.status(400).json({message: "sommething went wrong"})
                            }
                            const token = jwt.sign({
                                _id: data._id
                            }, process.env.JWT_SIGNIN_KEY, {expiresIn: '7d'});
                            const {_id, email} = newUser;
                            res.json({
                                token,
                                user: {
                                    _id,
                                    name,
                                    email
                                }
                            })
                        })
                    }
                }
            })
        }

    })
});

module.exports = app;
