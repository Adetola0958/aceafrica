const mongoose = require('mongoose') 
const Schema   = mongoose.Schema

const ApplicationSchema = new Schema({
    email : {type : String},
    telephone : {type : Number},
    program : {type : String},
    housing : {type : String},
    duration : {type : String},
    cost : {type : String, default : "#50,000"},
    courses : {type : Array}
})

module.exports = mongoose.model("Application", ApplicationSchema)