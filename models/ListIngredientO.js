const { strict } = require('assert');
const mongoose=require('mongoose');


const ListIngredientSchema = new mongoose.Schema({
    quantity : String,
    created:{
        type:Date,
        default:Date.now
    },

});

const ListIngredient = mongoose.model('ListIngredient',ListIngredientSchema);

// ListIngredient sans s 
const ListIngredient = new ListIngredient({
    quantity :'onions',
    unity :'2 Kg',
    
  });
  
  ListIngredient.save((err,ListIngredientDB)=>{
    console.log('err',err);
   console.log('ListIngredientDB',ListIngredientDB)

});
  

module.exports = ListIngredient ;