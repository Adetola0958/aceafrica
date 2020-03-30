const mongoose = require('mongoose') 
const Schema   = mongoose.Schema

const ProjectSchema = new Schema ({
    type : {type : String},
    target : {type : String},
    budget : {type : String},
    duration : {type : String},
    businessName : {type : String},
    location : {type : String}
})

module.exports = mongoose.model("Project", ProjectSchema)