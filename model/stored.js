const mongoose = require("mongoose");
const validator = require("validator");

const storedData = new mongoose.Schema({
    text : {
        type:String,
        required:true
    },
    lang : {
        type:String,
        required:true,
        minlength:2
    },
    translatedText : {
        type:String
    }
})

const Stored = new mongoose.model('Stored', storedData);

module.exports = Stored;