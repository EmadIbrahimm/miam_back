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


/*/  Ingrédients de test
Ingredient.find({}, (err, ingredients) => {
  if (ingredients.length > 0) {
    return;
  };
  Ingredient({name: 'Poulet', unity: 'kilo'}).save();
  Ingredient({name: 'Copeaux de noix de coco', unity: 'kilo'}).save();
  Ingredient({name: 'Gingembre', unity: 'kilo'}).save();
  Ingredient({name: 'Curry en poudre', unity: 'litre'}).save();
  Ingredient({name: 'Oignon / ognon', unity: 'unite'}).save();
  Ingredient({name: 'Champignon', unity: 'kilo'}).save();
  Ingredient({name: 'Farine', unity: 'kilo'}).save();
  Ingredient({name: 'Lait', unity: 'litre'}).save();
  Ingredient({name: 'Huile', unity: 'litre'}).save();
  Ingredient({name: 'Moutarde', unity: 'litre'}).save();
  Ingredient({name: 'Oeuf', unity: 'unite'}).save();
  Ingredient({name: 'Eau', unity: 'litre'}).save();
  Ingredient({name: 'Mayonnaise', unity: 'litre'}).save();
  Ingredient({name: 'Tomate', unity: 'litre'}).save();
  Ingredient({name: 'Mozzarella', unity: 'kilo'}).save();
  Ingredient({name: 'Spaghetti', unity: 'kilo'}).save();
  Ingredient({name: 'Banane', unity: 'unite'}).save();
  Ingredient({name: 'Orange', unity: 'unite'}).save();
  Ingredient({name: 'Raisin', unity: 'unite'}).save();
  Ingredient({name: 'Ananas', unity: 'unite'}).save();
  Ingredient({name: 'Basilic', unity: 'kilo'}).save();
  Ingredient({name: 'Persil', unity: 'kilo'}).save();
  Ingredient({name: 'Parmezan', unity: 'kilo'}).save();
  Ingredient({name: 'Tomate', unity: 'unite'}).save();
  Ingredient({name: 'Oignon', unity: 'unite'}).save();
  Ingredient({name: 'Herbes de provence', unity: 'unite'}).save();
  Ingredient({name: 'Boeuf haché', unity: 'unite'}).save();
});
//  Fin ingrédients de test */

module.exports = Ingredient;
