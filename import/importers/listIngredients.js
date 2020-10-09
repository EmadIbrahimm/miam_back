const rawData =  require('../fixtures/listIngredients.json');

const { ListIngredient } = require('../../models');
const Model = ListIngredient;

const importDb = ( ingredients, userId, cb) => { // Create function with call back in argument
    // console.log( 'importers/listIngredients #importDB ingredients', ingredients);
    // console.log( 'importers/listIngredients #importDB userId', userId);
    
    Model.collection.dropIndexes( (err) => { // Indexes arn't deleted by deletMany
        if (err !== null) {
            console.log('importers/listIngredients #dropIndexes err', err);
        };
        Model.deleteMany({}, (err) => {
            if (err !== null) {
                console.log('importers/listIngredients #dropIndexes err', err);
            };

            const data = rawData.map( (el) => {
                let result = {};

                ingredients.forEach( (element) => {

                    if ( el.name === element.name ) {
                        result = {
                            quantity: el.quantity,
                            ingredient: element._id,
                            user: userId
                        };                        
                        return;
                    }
                   
                });
                // console.log('importers/listIngredients #map result', result);
                return result;  

            });

            // console.log('data', data);

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