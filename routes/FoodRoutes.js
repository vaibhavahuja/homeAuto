const express = require('express');
const foodModel = require('../models/FoodModel.js');
const app = express();

app.get('/food/:name', async(req, res)=>{
    // const foods = await foodModel.find({});
    const foods = await foodModel.findOne({name: req.params.name});
    console.log("found my switch ", foods);
    try{
        const status = foods.state;
        res.send({status});
    }catch(err){
        res.status(500).send(err);
    }
});


app.post('/food', async(req, res)=>{
    console.log("entered /food");
    console.log(req.body);
    const food = new foodModel(req.body);
    try{
        await food.save();
        res.send(food);
    } catch(err){
        res.status(500).send(err);
    }
});

app.delete('/food/:id', async (req, res) => {
    try {
      const food = await foodModel.findByIdAndDelete(req.params.id)
  
      if (!food) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
  });

//works fine for updating the state :)
app.patch('/food/:name', async (req, res) => {
    try {
        const newModel = await foodModel.findOne({name: req.params.name});
        console.log("I am here", req.params.name);
        console.log("updating the state");
        newModel.state = 1 - newModel.state;    //toggle state
        await foodModel.findByIdAndUpdate(newModel._id, newModel);
        await foodModel.save();
        res.send(newModel);
    } catch (err) {
        res.status(500).send(err)
    }
})  


module.exports = app;
