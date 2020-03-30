const mongoose = require('mongoose') 
const Schema   = mongoose.Schema

const AceSchema = new Schema ({
    name : {type : String}
}) 

module.exports = mongoose.model("Ace" , AceSchema)