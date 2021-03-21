const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    email:{
        type: String, 
        required: true,
        trim: true, 
        lowercase: true
    }, date:{
        type: Date,
        default: Date.now
    }
});

const Contacts = mongoose.model("Contacts", ContactSchema);
module.exports = Contacts;