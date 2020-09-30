const express = require('express');
const router = express.Router();
const IngredientModel = require('../models/ingredient');
console.log('IngredientModel', IngredientModel);
 



router.get('/', (req, res) => {
  IngredientModel.find({}, (err, ingredients)=> {
    if (err) {
      res.json({
          success : false,
          message : err.toSting()
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

  
});
  // Redirect to a Database modification of ingredients ???

  // const {
  //   name = '',
  //   unity = ''
  // } = req.body;

//  const ingredient = new IngredientModel({
//       name,
//       unity
//   }); 

//   ingredient.save((err, ingredient) => {
//     res.json({
//       success: true,
//       data: ingredient
//     });
//   });




module.exports = router;