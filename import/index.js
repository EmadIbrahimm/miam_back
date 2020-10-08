require('dotenv').config();
const mongoose = require('mongoose');

const importIngredients = require('./importers/ingredients');
const importUsers = require('./importers/users');
const importListIngredients = require('./importers/listIngredients');
const importRecipes = require('./importers/recipes');


const connectDB = require('../config/db')
connectDB()

importIngredients( (err, ingredients) => { // Callback ingredients
    if (err !== null) {
        console.log('index #importIngredients err', err);
        return;
    };
    console.log(`${ingredients.length} ingredients added in DB`);

    importUsers( (err, users) => { // Callback users
        if (err !== null) {
            console.log('index #importUsers err', err);
            return;
        };
        console.log(`${users.length} importUsers added in DB`);

        importListIngredients( ingredients, users[0]._id, (err, listIngredients) => { // Callback users
            if (err !== null) {
                console.log('index #importListIngredient err', err);
                return;
            };
            console.log(`${listIngredients.length} importListIngredient added in DB`);
            // console.log('users[0]._id', users[0]._id);
        // cb suivante (listIngredient)
            importRecipes( ingredients, (err, recipes) => { // Callback users
                if (err !== null) {
                    console.log('index #importRecipes err', err);
                    return;
                };
                console.log(`${recipes.length} importRecipes added in DB`);
            // cb suivante (recipe)
                // cb suivante (favori) 
                mongoose.connection.close();
            })                
        })
    })
})



console.log('........... postinstall ...........');