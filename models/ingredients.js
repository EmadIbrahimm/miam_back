const { strict } = require('assert');
const mongoose=require('mongoose');


const ingredientsSchema = new mongoose.Schema({
    name : String,
    unity : String,
    created:{
        type:Date,
        default:Date.now
    },

});

const Ingredients = mongoose.model('Ingredients',ingredientsSchema);

const ingredients = new Ingredients({
    name :'tomate',
    unity :'5 Kg',
    
  });
  
  ingredients.save((err,ingredientsDB)=>{
    console.log('err',err);
   console.log('ingredientsDB',ingredientsDB)

});
  

module.exports = Ingredients ;