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
const listIngredient = new ListIngredient({
    quantity :'onions',
    unity :'2 Kg',
    
  });
  
  listIngredient.save((err,ListIngredientDB)=>{
    console.log('err',err);
   console.log('ListIngredientDB',ListIngredientDB)

});
  

module.exports = ListIngredient ;