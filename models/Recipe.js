const mongoose=require('mongoose');


const recipeSchema=new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    dishType: String,
    photos: [String],
    video: String,
    preparationTime: Number,
    cookingTime: Number,
    difficultyLevel: Number,
    ingredients: [{
        ingerdient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
        },
        quantity: Number
    }],
    recipeSteps: [String],
    created:{
        type:Date,
        default:Date.now
    },
});

const Recipe = mongoose.model('Recipe',recipeSchema);

// Recette de test
Recipe.find({}, (err, recipes) => {
    if (recipes.length > 0) {
      return;
    };
    Recipe({
        title: "Oeuf mayonnaise",
        dishType: "Entree",
        photos: [
            "../src/uploads/recipes/photos/photo1.jpg",
            "../src/uploads/recipes/photos/photo2.jpg",
            "../src/uploads/recipes/photos/photo3.jpg"
        ],
        video: "../src/uploads/recipes/videos/video1.jpg",
        preparationTime: 10,
        coockingTime: 10,
        difficultyLevel: 3,
        ingredients: [
            {
                // ingredient: "id du jaune d’oeuf",
                quantity: 1,
                isMandatory: true
            },
            {
                // ingredient: "id de moutarde",
                quantity: 20
            },
            {
                // ingredient: "id de huile",
                quantity: 250
            }
        ],
        recipeSteps: [
            "Faire bouillir de l'eau",
            "Plonger les oeufs dans l'eau pendant 8 minutes",
            "Pendant ce temps mélanger les jaunes d’oeuf  avec la moutarde",
            "Fouetter en ajoutant l'huile petit à petit",
            "Assaisonner"
        ]
    }).save();
});
//  Fin recette de test */
  
module.exports = Recipe;