const { strict } = require('assert');
const mongoose=require('mongoose');


const RecipeSchema=new mongoose.Schema({
    title : String,
    dishType : String,
    photo : String,
    video : String,
    preparationTime : Number,
    cookingTime : Number,
    difficultyLevel : Number,
    recipeSteps : [],
    created:{
        type:Date,
        default:Date.now
    },

});

const Recipe = mongoose.model('Recipe',RecipeSchema);

const recipe = new Recipe({
    title : 'rise',
    dishType : 'main dish',
    preparationTime :15,
    cookingTime : 30,
    difficultyLevel : 3,
  });
  
  recipe.save((err,RecipeDB)=>{
    console.log('err',err);
   console.log('Recipe',RecipeDB)

});
  

module.exports = Recipe ;