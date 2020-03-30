const mongoose = require('mongoose') 
const Schema   = mongoose.Schema

const HireSchema = new Schema ({
    role : {type : String},
    total: {type : String},
    organizationName : {type : String},
    duties : {type : Array}
})

module.exports = mongoose.model("Hire", HireSchema)