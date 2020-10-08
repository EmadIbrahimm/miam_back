const rawData =  require('../fixtures/ingredients.json'); // using "rawData" for code potability

const { Ingredient  } = require('../../models');
const Model = Ingredient; // for code potability

const importDb = (cb) => { // Create function with call back in argument
    Model.collection.dropIndexes( (err) => { // Indexes arn't deleted by deletMany
        if (err !== null) {
            console.log('importers/ingredients #dropIndexes err', err);
        };
        Model.deleteMany({}, (err) => {
            if (err !== null) {
                console.log('importers/ingredients #dropIndexes err', err);
            };
            Model.insertMany(rawData, (err, data) => {
                if (err !== null) {
                    console.log('importers/ingredients #insertMany err', err);
                    cb(err);
                    return;
                };
                cb(null, data)
            })
        })
    });
}

module.exports = importDb;