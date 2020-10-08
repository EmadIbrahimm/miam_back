const rawData =  require('../fixtures/users.json'); // using "rawData" for code potability

const { User  } = require('../../models');
const Model = User; // for code potability

const importDb = (cb) => { // Create function with call back in argument
    Model.collection.dropIndexes( (err) => { // Indexes arn't deleted by deletMany
        if (err !== null) {
            console.log('importers/users #dropIndexes err', err);
        };
        Model.deleteMany({}, (err) => {
            if (err !== null) {
                console.log('importers/users #dropIndexes err', err);
            };
            Model.insertMany(rawData, (err, data) => {
                if (err !== null) {
                    console.log('importers/users #insertMany err', err);
                    cb(err);
                    return;
                };
                cb(null, data)
            })
        })
    });
}

module.exports = importDb;