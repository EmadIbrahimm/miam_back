const express = require('express');
const router = express.Router();
const RecipeModel = require('../models/recipe');
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



module.exports = router;