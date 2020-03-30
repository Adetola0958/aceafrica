const mongoose = require('mongoose') 
const Schema   = mongoose.Schema

const PartnerSchema = new Schema ({
    organizationName : {type : String},
    nature : {type : String},
    address : {type : String},
    telephone : {type : String},
    description : {type : String}
})

module.exports = mongoose.model("Partner", PartnerSchema)