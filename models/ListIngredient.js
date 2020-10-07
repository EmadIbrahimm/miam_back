const { strict } = require('assert');
const mongoose=require('mongoose');


const listIngredientSchema = new mongoose.Schema({
    quantity: Number,
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created:{
        type:Date,
        default:Date.now
    },

});


const ListIngredient = mongoose.model('ListIngredient',listIngredientSchema);
///////////////////////////////////////////

// Ingredient.find({}, (err, ingredients) => {
//     if (ingredients.length > 0) {
//       return;
//     };

//     const username = req.body.username;
//     const newIngredient = req.body.ingredient;
//     const quantity = req.body.quantity;

//     let idUser = '';
//     let idIngredient = '';

//     console.log('newIngredient', newIngredient);

//     User.findOne({'Batman'}, (err, user) => {
//         console.log('user._id', user._id);
//         if (err) {
//             console.log('err', err);
//             return;
//         };
//         user = user._id;

//         Ingredient.findOne({name: newIngredient}, (err, ingredient) => {
//             // console.log('userIngredient', userIngredient);
//             console.log('ingredient', {ingredient })
//             console.log('ingredient._id', ingredient._id);
//                 if (err) {
//                 console.log('err', err);
//                 return;
//             };
//             ingredient = ingredient._id;

//             ListIngredient({
//                 ingredient,
//                 user,
//                 quantity
//             }).save()


//             });
//         });
    
// })

module.exports = ListIngredient;