const express = require('express');
const router = express.Router();
const RecipeModel = require('../models/recipe');
const ListIngredient = require('../models/listIngredient');
console.log('RecipeModel', RecipeModel);
 
// router.post("/", (req, res) => {   
//     console.log('POST /recipe')
//     console.log('POST /recipe', req.body)
  
//     const {
//       title = '',
//       dishType = '',
//       preparationTime = 0,
//       cookingTime = 0,
//       difficultyLevel = 0,
//       recipeSteps = [],
//       ingredients
      
//     } = req.body;
  
//    const recipe = new RecipeModel({
//         title,
//         dishType,
//         preparationTime,
//         cookingTime,
//         difficultyLevel,
//         recipeSteps,
//         ingredients
//     }); 
  
//     recipe.save((err, recipes) => {
//       res.json({
//         success: true,
//         data: recipes
//       });
//     });
  
    
// });
router.get('/users/:id', (req, res) => {
  console.log('GET /recipes/users/:id');
  console.log('GET /recipes/users/:id req.params.name', req.params.id);
  const user = req.params.id;
  let userIngredients = [];
  let recipesToCook = [];
  // let recipe = '';

  console.log('GET /recipes/users/:id user', user);

  ListIngredient.find({user})
  .populate('ingredient')
  .exec((err, listIngredient) => {
    if (err) {
      console.log('err', err)
      return;
    };
    userIngredients = listIngredient.map( (el) => {
      return {
        _id: el.ingredient._id,
        quantity: el.quantity
      };
    });

    // console.log('GET /recipes/users/:id userIngredients', userIngredients);
    RecipeModel.find({}, (err, recipes)=> {

      // console.log('GET /recipe/users/:id recipes', recipes);

      if (err) {
        console.log('err', err)
        res.json({
          success : false,
          message : err.toString()
        });
        return;
      };

      recipes.forEach(recipe => {
        const isReadyForRecipe = canMakeRecipe (userIngredients, recipe)
        console.log('GET /recipes/users/:id isReadyForRecipe',isReadyForRecipe)
        if (isReadyForRecipe === true) {
          recipesToCook.push(recipe);
        }
      })

      res.json({
        success: true,
        data: recipesToCook
      })

      // recipe = recipes;
      // console.log('GET /recipe/users/:id recipe', recipe);
    })
  });

});

router.get('/:id', (req, res) => {
  RecipeModel.find({}, (err, recipes)=> {
    if (err) {
      res.json({
          success : false,
          message : err.toString()
      });
      return;
  }
      res.json({
          success: true,
          data: recipes
      });
  });
});


function canMakeRecipe ( userIngredients, recipe ) {
  console.log('#canMakeRecipe');
  // console.log('#canMakeRecipe recipe.ingredients', recipe.ingredients);
  // console.log('#canMakeRecipe userIngredients', userIngredients);
  let hasAllIngredients = true;

  recipe.ingredients.forEach(recipeIngredient => {
    // console.log('#canMakeRecipe recipeIngredient', recipeIngredient);
    if (recipeIngredient.isMandatory === false){
      // console.log(`#canMakeRecipe ingredient ${recipeIngredient._id} isn't mandatory`);
      return;
    }
    // console.log(`#canMakeRecipe ingredient ${recipeIngredient._id} is mandatory`)
    
    let ingredientExists = false

    userIngredients.forEach(userIngredient => {
      // console.log('recipeIngredient._id === userIngredient._id', recipeIngredient._id.toString() === userIngredient._id.toString());
      // console.log('recipeIngredient._id', recipeIngredient._id.toString(), ' ', typeof recipeIngredient._id.toString());
      // console.log('userIngredient._id', userIngredient._id.toString(), ' ', typeof userIngredient._id.toString());

      if (recipeIngredient._id.toString() === userIngredient._id.toString()){
        // console.log('recipeIngredient.quantity > userIngredient.quantity', recipeIngredient.quantity > userIngredient.quantity);
        // console.log('recipeIngredient.quantity', recipeIngredient.quantity);
        // console.log('userIngredient.quantity', userIngredient.quantity);
        
        if (recipeIngredient.quantity > userIngredient.quantity) {
          // console.log(`Not anought ${recipeIngredient._id}`)
          hasAllIngredients = false;         
          return;
        } else if (recipeIngredient.quantity <= userIngredient.quantity){
          // console.log(`Anought ${recipeIngredient._id}`)
          ingredientExists = true
          return;
        }
      }
    })

    if (ingredientExists === false) {
      hasAllIngredients = false;
      return;     
    }

  })

  return hasAllIngredients;

}

module.exports = router;