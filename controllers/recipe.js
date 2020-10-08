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
  console.log('GET /recipe/users/:id');
  console.log('GET /recipe/users/:id req.params.name', req.params.id);
  const user = req.params.id;
  let userIngredients = [];
  // let recipe = '';

  console.log('GET /recipe/users/:id user', user);

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

    console.log('GET /recipe/users/:id userIngredients', userIngredients);
    RecipeModel.find({}, (err, recipes)=> {

      // console.log('GET /recipe/users/:id recipes', recipes);

      if (err) {
        console.log('err', err)
        return;
      };

      recipes.forEach( recipe => {

        canMakeRecipe (userIngredients, recipe)

        return;
      });

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
  console.log('#canMakeRecipe recipe.ingredients', recipe.ingredients);
  console.log('#canMakeRecipe userIngredients', userIngredients);

  recipe.ingredients.forEach( recipeIngredient => {
    userIngredients.forEach( userIngredient => {
      console.log('#canMakeRecipe recipeIngredient.isMandatory', recipeIngredient.isMandatory);
      if ( recipeIngredient.isMandatory === false ){
        console.log('#canMakeRecipe ingredient not mandatory');
        return;
      }
      // if ( 
      //   recipeIngredient._id === userIngredient._id && 
      //   recipeIngredient.quantity >= userIngredient.quantity 
      // ){
      //   return true;
      // };
      return false;
    })
  })

}

module.exports = router;