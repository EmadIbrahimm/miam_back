const express = require('express');
const router = express.Router();
const ListIngredient = require('../models/listIngredient');
console.log('ListIngredient', ListIngredient);
 



// router.get('/:userId', (req, res) => {
router.get('/', (req, res) => {
    ListIngredient.find({}, (err, listingredients)=> {
    if (err) {
      res.json({
          success : false,
          message : err.toSting()
      });
      return;
  }
      res.json({
          success: true,
          data: listingredients
      });
  });
});



module.exports = router;