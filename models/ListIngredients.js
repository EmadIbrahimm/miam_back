const { strict } = require('assert');
const mongoose=require('mongoose');


const ListIngredientsSchema = new mongoose.Schema({
    quantity : String,
    created:{
        type:Date,
        default:Date.now
    },

});

const ListIngredients = mongoose.model('ListIngredients',ListIngredientsSchema);

// ListIngredient sans s 
const ListIngredient = new ListIngredients({
    quantity :'onions',
    unity :'2 Kg',
    
  });
  
  ListIngredient.save((err,ListIngredientsDB)=>{
    console.log('err',err);
   console.log('ListIngredientsDB',ListIngredientsDB)

});
  

module.exports = ListIngredients ;