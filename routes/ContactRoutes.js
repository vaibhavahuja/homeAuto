const express = require('express');
const contactModel = require('../models/ContactModel.js');
const app = express();



app.post('/contact', async(req, res)=>{
    console.log("reached here");
    console.log("saving new contact");
    console.log(req.body);
    const email = new contactModel(req.body);
    try{
        await email.save();
        res.send(email);
    } catch(err){
        res.status(500).send(err);
    }
});

module.exports = app;
