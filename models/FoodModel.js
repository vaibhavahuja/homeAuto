const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true,
        trim: true, 
        lowercase: true
    },
    state:{
        type: Number,
        default: 0, 
    },
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;