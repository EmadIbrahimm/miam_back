const rawData =  require('../fixtures/listIngredients.json');

const { Ingredient, User, ListIngredient } = require('../../models');
const Model = ListIngredient;

const importDb = ( ingredients, users, cb) => { // Create function with call back in argument
    console.log( 'importers/listIngredients #importDB ingredients', ingredients);
    console.log( 'importers/listIngredients #importDB users', users);
    
    Model.collection.dropIndexes( (err) => { // Indexes arn't deleted by deletMany
        if (err !== null) {
            console.log('importers/listIngredients #dropIndexes err', err);
        };
        Model.deleteMany({}, (err) => {
            if (err !== null) {
                console.log('importers/listIngredients #dropIndexes err', err);
            };
            Model.insertMany(rawData, (err, data) => {
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

/*ListIngredient.find({}, (err, ingredients) => {
    if (ingredients.length > 0) {
      return;
    };

    const User = require('../models/user');
    const Ingredient = require('../models/ingredient');

    const username = 'Batman';
    const newIngredients = [
        {
            name: 'Tomate',
            quantity: 12
        },
        {
            name: 'Mozzarella',
            quantity: 1
        },
        {
            name: 'Spaghetti',
            quantity: 1
        },
        {
            name: 'Oignon / ognon',
            quantity: 5
        } ,
        {
            name: 'Boeuf haché',
            quantity: 5
        },
        {
            name: 'Banane',
            quantity: 4
        },
        {
            name: 'Raisin',
            quantity: 3
        },
        {
            name: 'Ananas',
            quantity: 2
        },
        {
            name: 'Oeuf',
            quantity: 12
        },
        {
            name: 'Mayonnaise',
            quantity: 1
        }
    ];
    
    newIngredients.forEach( (el) => {
        
        User.findOne({username}, (err, user) => {
            console.log('user', user);
            console.log('user._id', user._id);
            if (err) {
                console.log('err', err);
                return;
            };
            idUser = user._id;

            Ingredient.findOne({ name: newIngredient[el].name }, (err, ingredient) => {
                // console.log('userIngredient', userIngredient);
                console.log('ingredient', {ingredient })
                console.log('ingredient._id', ingredient._id);
                    if (err) {
                    console.log('err', err);
                    return;
                };
                idIngredient = ingredient._id;

                new ListIngredient({
                    ingredient: idIngredient,
                    user: idUser,
                    quantity: newIngredient[el].quantity
                }).save();
            });

        })
    });

})*/