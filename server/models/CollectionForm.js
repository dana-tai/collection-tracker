const mongoose = require("mongoose");

const CollectionFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, ["Name required"]]
    },
    year: {
        type: Number,
        required: [true, ["Year required"]]
    },
    isOwn: {
        type: Boolean,
    }
}, {timestamps: true})

module.exports = mongoose.model("CollectionForm", CollectionFormSchema)