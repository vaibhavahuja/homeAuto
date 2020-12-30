const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/FoodRoutes.js');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://vmorpheus:vaibhavahuja@cluster0-8yxfm.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true
});
mongoose.set('useFindAndModify', false);

app.use(foodRouter);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("server is running")
});