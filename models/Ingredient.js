// const { strict } = require('assert');
const mongoose=require('mongoose');
// const { ingredient } = require('../controllers');

const ingredientSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    unity: {
      type: String,
      required: true,
      unique: true
    },
    created:{
      type:Date,
      default:Date.now
  },

});
//Schema Definition

const Ingredient = mongoose.model('Ingredient', ingredientSchema);


//  Ingrédients de test
Ingredient({name: 'Poulet',unity: 'kilo'}).save();
Ingredient({name: 'Copeaux de noix de coco',unity: 'kilo'}).save();
Ingredient({name: 'Gingembre',unity: 'kilo'}).save();
Ingredient({name: 'Curry en poudre',unity: 'litre'}).save();
Ingredient({name: 'Oignon / ognon',unity: 'unité'}).save();
Ingredient({name: 'Champignon',unity: 'kilo'}).save();
Ingredient({name: 'Farine',unity: 'kilo'}).save();
Ingredient({name: 'Lait',unity: 'litre'}).save();
Ingredient({name: 'Huile',unity: 'litre'}).save();
Ingredient({name: 'Moutarde',unity: 'litre'}).save();
Ingredient({name: 'Oeuf',unity: 'Unité'}).save();
Ingredient({name: 'Eau',unity: 'Litre'}).save();
//  Fin ingrédients de test */

module.exports = Ingredient;
