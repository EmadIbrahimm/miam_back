const express = require('express');
const router = express.Router();
const IngredientModel = require('../models/ingredient');
console.log('IngredientModel', IngredientModel);
 
router.get('/', (req, res) => {
  IngredientModel.find({}, (err, ingredients)=> {
    if (err) {
      res.json({
          success : false,
          message : err.toString()
      });
      return;
    }
    res.json({
        success: true,
        data: ingredients
    });
  });
});

router.post("/", (req, res) => {   
  console.log('POST /ingredient')
  console.log('POST /ingredient', req.body)

  const {
    name = '',
    unity = ''
  } = req.body;

 const ingredient = new IngredientModel({
      name,
      unity
  }); 

  ingredient.save((err, ingredients) => {
    res.json({
      success: true,
      data: ingredients
    });
  });
 
});
  // Redirect to a Database modification of ingredients ???

module.exports = router;