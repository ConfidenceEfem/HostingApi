const mongoose = require("mongoose");

const schoolSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    population:{
        type: Number,
        required: true,
    }
},{
    timestamps: true
})

const SchoolModel = mongoose.model("SchoolModel", schoolSchema)

module.exports = SchoolModel