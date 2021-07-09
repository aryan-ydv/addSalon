const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const submitReviewSchema = new Schema({
    review: {
        type: String
    }

});

const SubmitReview = mongoose.model("submitReview", submitReviewSchema);
module.exports = SubmitReview;
