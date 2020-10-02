const mongoose=require('mongoose');


const recipeSchema=new mongoose.Schema({
    title : String,
    dishType : String,
    photo : String,
    video : String,
    preparationTime : Number,
    cookingTime : Number,
    difficultyLevel : Number,
    ingredients : [{
        ingerdient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
        },
        quantity: Number
    }],
    recipeSteps : [String],
    created:{
        type:Date,
        default:Date.now
    },

});

const Recipe = mongoose.model('Recipe',recipeSchema);

  
module.exports = Recipe;