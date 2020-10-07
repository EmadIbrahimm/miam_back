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

/*/ lier du 5 unités de lait et 2 unités de farine avec Batman




const IngredientModel = require('../models/ingredient');
const UserModel = require('../models/user');

IngredientModel.findById({}, (err, ingredients)=> {
    if (err) {
        res.json({
            success : false,
            message : err.toSting()
        });
    return;
    }
    res.json({
        success: true,
        data: ingredients
    });
});


UserModel.findOne({ name: "batman" }, (err, users)=> {
    if (err) {
        res.json({
            success : false,
            message : err.toSting()
        });
        return;
    }
    res.json({
        success: true,
        data: users
    });
});
*/

module.exports = ListIngredient;