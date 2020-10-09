const rawData =  require('../fixtures/recipes.json');

const { Recipe } = require('../../models');
const Model = Recipe;

const importDb = ( ingredients, cb) => { // Create function with call back in argument
    // console.log( 'importers/listIngredients #importDB ingredients', ingredients);
    
    Model.collection.dropIndexes( (err) => { // Indexes arn't deleted by deletMany
        if (err !== null) {
            console.log('importers/listIngredients #dropIndexes err', err);
        };
        Model.deleteMany({}, (err) => {
            if (err !== null) {
                console.log('importers/listIngredients #dropIndexes err', err);
            };

            const data = rawData.map( (recipe) => {
                // const recipeIngredients = recipe.ingredients;

                recipe.ingredients.forEach( (el) => {
                    ingredients.forEach( (element) => {

                        if ( el._id === element.name ) {
                            el._id = element._id;
                        }  
                    });

                    // console.log('importers/recipes el', el);
                });
                // console.log('importers/recipes Recipe.ingredients', recipe.ingredients);
                return recipe;
            });

            // console.log('data', data[0]);

            Model.insertMany(data, (err, data) => {

                if (err !== null) {
                    console.log('importers/listIngredients #insertMany err', err);
                    cb(err);
                    return;
                };
                cb(null, data)
            })
        })
    });
}

module.exports = importDb;