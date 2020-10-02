// const { strict } = require('assert');
const mongoose=require('mongoose');
// const { ingredient } = require('../controllers');

const ingredientSchema = new mongoose.Schema({
    name : String,
    unity : String,
    created:{
      type:Date,
      default:Date.now
  },

}); //Schema Definition

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
