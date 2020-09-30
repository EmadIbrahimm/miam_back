const { strict } = require('assert');
const mongoose=require('mongoose');
const express = require('express');

const app = express();

// const IngredientSchema = new mongoose.Schema({
//     name : String,
//     unity : String,
//     user : {
//         type : mongoose.Types.ObjectId,
//         ref: 'user',
//     },
//     created:{
//         type:Date,
//         default:Date.now
//     },

// });

// const Ingredient = mongoose.model('Ingredient',IngredientSchema);

// const ingredient = new Ingredient({
//     name :'tomate',
//     unity :'g', // "g": grams, "ml": mililiter or "" 
    
//   });
  
//   ingredient.save((err,IngredientDB)=>{
//     console.log('err',err);
//    console.log('IngredientDB',IngredientDB)

// });



const Ingredient = mongoose.model('Ingredient', {
  name: String,
  unity: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

// module.exports = Model;



app.post("/ing", (req, res) => {   
    console.log('POST /ing', req.body)
    const {
        name = '',
        unity = '',
       
    } = req.body;

const ingredient = new ingredient({
    name,
    address,
    city,
    country,
    stars,
    hasSpa
});

ingredients.save((err, ingredient) => {
    res.json({
    success: true,
    data: ingredient
    });
 });

});
module.exports = Ingredient ;