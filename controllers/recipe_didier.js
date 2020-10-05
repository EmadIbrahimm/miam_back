const express = require('express');
const multer  = require('multer');
// const fs = require('fs');

const RecipeModel = require('../models/recipe_didier');

const uploadPhotos = multer({ dest: 'src/uploads/recipes/photos' }); 
// const uploadVideo = multer({ dest: 'src/uploads/recipes/' }); 
const router = express.Router();

console.log('RecipeModel', RecipeModel);
 
router.post("/", uploadPhotos.array('photos'), (req, res) => {   //uploadPhotos.array('photos')
  console.log('POST /recipe');
  console.log('POST /recipe', req.body);
  console.log('POST /recipe req.body.photos', req.body.photos);
  console.log('POST /recipe req.files', req.files);
  
  const {
    title = '',
    dishType = '',
    preparationTime = 0,
    cookingTime = 0,
    difficultyLevel = 0,
    recipeSteps = [''],
    ingredients = '',
    // video = '',
    photos = ['']

  } = req.body;
  
  // const fileName = 'video.' + req.file.mimetype.slice(6) // Get file extension (jpeg, gif, png)
  // const video = '../src/uploads/recipes/video' + fileName;


  /* Rename video */ 
  // fs.rename( req.file.path, 'src/uploads/recipes/' + fileName, (err) => {
  //   if (err !== null) {
  //       console.log('renaming error', err);
  //       return;
  //   };
  //   console.log('file successfully renamed');
  // });


  // for ( var i = 1; i <= photos.length; i++ ){
  //   const photoFileName = req.body._id[i] + '.' + req.file.mimetype.slice(6) // Get file extension (jpeg, gif, png)
  //   fs.rename( req.file.path, 'src/uploads/recipes/photos/' + fileName, (err) => {
  //     if (err !== null) {
  //         console.log('renaming error', err);
  //         return;
  //     };
  //     console.log('file successfully renamed');
  //   });
  // }

  const recipe = new RecipeModel({
    title,
    dishType,
    preparationTime,
    cookingTime,
    difficultyLevel,
    recipeSteps,
    ingredients,
    video,
    photos
  }); 
  
  recipe.save((err, recipes) => {
    res.json({
      success: true,
      data: recipes
    });
  });

});


router.get('/:id', (req, res) => {
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