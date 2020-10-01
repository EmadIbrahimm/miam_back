const express = require('express');
const router = express.Router();
const RecipeModel = require('../models/recipe');
console.log('RecipeModel', RecipeModel);
 



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