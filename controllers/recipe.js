const express = require('express');
const router = express.Router();
const RecipeModel = require('../models/recipe');
console.log('RecipeModel', RecipeModel);
 
router.post("/", (req, res) => {   
    console.log('POST /recipe')
    console.log('POST /recipe', req.body)
  
    const {
      title = '',
      dishType = '',
      preparationTime,
      cookingTime,
      difficultyLevel,
    } = req.body;
  
   const recipe = new RecipeModel({
        title,
        dishType,
        preparationTime,
        cookingTime,
        difficultyLevel
    }); 
  
    recipe.save((err, recipes) => {
      res.json({
        success: true,
        data: recipes
      });
    });
  
    
});


router.get('/', (req, res) => {
  RecipeModel.find({}, (err, recipes)=> {
    if (err) {
      res.json({
          success : false,
          message : err.toSting()
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