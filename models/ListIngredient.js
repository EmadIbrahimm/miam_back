const { strict } = require('assert');
const mongoose=require('mongoose');


const listIngredientSchema = new mongoose.Schema({
    quantity : String,
    ingredient : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created:{
        type:Date,
        default:Date.now
    },

});


const ListIngredient = mongoose.model('ListIngredient',listIngredientSchema);

// lier du 5 unités de lait et 2 unités de farine avec Batman

module.exports = ListIngredient;