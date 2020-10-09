// const { strict } = require('assert');
const mongoose=require('mongoose');


const listIngredientSchema = new mongoose.Schema({
    quantity: Number,
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created:{
        type:Date,
        default:Date.now
    },

});


<<<<<<< HEAD
// ListIngredient sans s 
const listIngredient = new ListIngredient({
    quantity :'onions',
    unity :'2 Kg',
    
  });
  
  listIngredient.save((err,ListIngredientDB)=>{
    console.log('err',err);
   console.log('ListIngredientDB',ListIngredientDB)

});
  
=======
const ListIngredient = mongoose.model('ListIngredient',listIngredientSchema);
>>>>>>> 3a985e4978a364033148d3eb83543956f2ea6687

module.exports = ListIngredient;