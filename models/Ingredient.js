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


//  Fin ingrédients de test
const ingredientPoulet = new Ingredient({
  name: 'Poulet',
  unity: 'kilo'
});

ingredientPoulet.save((err,ingredientDb)=>{
  console.log('err',err);
  console.log('userDb',ingredientDb)
});

const ingredientCopeauxNoixDeCoco = new Ingredient({
  name: 'Copeaux de noix de coco',
  unity: 'kilo'
});

ingredientCopeauxNoixDeCoco.save((err,ingredientDb)=>{
  console.log('err',err);
  console.log('userDb',ingredientDb)
});

const ingredientGingembre = new Ingredient({
  name: 'gingembre',
  unity: 'kilo'
});

ingredientGingembre.save((err,ingredientDb)=>{
  console.log('err',err);
  console.log('userDb',ingredientDb)
});

const ingredientCurryPoudre = new Ingredient({
  name: 'Curry en poudre',
  unity: 'litre'
});

ingredientCurryPoudre.save((err,ingredientDb)=>{
  console.log('err',err);
  console.log('userDb',ingredientDb)
});

const ingredientOignon = new Ingredient({
  name: 'Oignon / ognon',
  unity: 'unité'
});

ingredientOignon.save((err,ingredientDb)=>{
  console.log('err',err);
  console.log('userDb',ingredientDb)
});

const ingredientChampignon = new Ingredient({
  name: 'Champignon',
  unity: 'kilo'
});

ingredientChampignon.save((err,ingredientDb)=>{
  console.log('err',err);
  console.log('userDb',ingredientDb)
});

const ingredientFarine = new Ingredient({
  name: 'Farine',
  unity: 'kilo'
});

ingredientFarine.save((err,ingredientDb)=>{
  console.log('err',err);
  console.log('userDb',ingredientDb)
});

const ingredientLait = new Ingredient({
  name: 'Lait',
  unity: 'litre'
});

ingredientLait.save((err,ingredientDb)=>{
  console.log('err',err);
  console.log('userDb',ingredientDb)
});
//  Fin ingrédients de test */

module.exports = Ingredient;
