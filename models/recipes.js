const { strict } = require('assert');
const mongoose=require('mongoose');


const recipesSchema=new mongoose.Schema({
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

const recipes = mongoose.model('recipes',recipesSchema);

const recipe = new recipes({
    title : 'rise',
    dishType : 'main dish',
    preparationTime :15,
    cookingTime : 30,
    difficultyLevel : 3,
  });
  
  recipe.save((err,recipesDB)=>{
    console.log('err',err);
   console.log('recipes',recipesDB)

});
  

module.exports = recipes ;