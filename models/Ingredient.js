const { strict } = require('assert');
const mongoose=require('mongoose');


const IngredientSchema = new mongoose.Schema({
    name : String,
    unity : String,
    user : {
        type : mongoose.Types.ObjectId,
        ref: 'user',
    },
    created:{
        type:Date,
        default:Date.now
    },

});

const Ingredient = mongoose.model('Ingredient',IngredientSchema);

const Ingredient = new Ingredient({
    name :'tomate',
    unity :'g', // "g": grams, "ml": mililiter or "" 
    
  });
  
  Ingredient.save((err,IngredientDB)=>{
    console.log('err',err);
   console.log('IngredientDB',IngredientDB)

});
  

module.exports = Ingredient ;