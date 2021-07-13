const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({
    name: {
        type: String
    },
    role: {
        type: String,
        enum: [
            'USER', 'SALOON'
        ],
        default: 'USER'
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true

    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    resetLink: {
        type: String,
        default: ''
    }

}, {
    strict: true
}, {timestamps: true});


const Signup = mongoose.model('signup', signupSchema);
module.exports = Signup;
