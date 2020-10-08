// const { strict } = require('assert');
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

module.exports = ListIngredient;