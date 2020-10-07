const express = require('express');
const router = express.Router();
const ListIngredient = require('../models/listIngredient');
const User = require('../models/user');
const Ingredient = require('../models/ingredient');

console.log('ListIngredient', ListIngredient);
 
router.get('/users/:id', (req, res) => {
    console.log('GET /listIngredient');
    console.log('GET /listIngredient req.params.name', req.params.id);
    const user = req.params.id

    console.log('GET /listIngredient user', user);

    ListIngredient.find({user})
    .populate('ingredient')
    .exec((err, listIngredient) => {
        if (err) {
            res.json({
                success : false,
                message : err.toString()
            });
            return;
        };

        // console.log("listIngredient.ingredient", listIngredient.ingredient);
        // console.log("listIngredient.quantity", listIngredient.quantity);

        res.json({
            success: true,
            data: listIngredient
        });
    });
});


router.post('/', (req, res) => {
    console.log('POST /listIngredient');
    console.log('POST /listIngredient req.body', req.body);
    
    const username = req.body.username;
    const newIngredient = req.body.ingredient;
    const quantity = req.body.quantity;

    let idUser = '';
    let idIngredient = '';

    console.log('newIngredient', newIngredient);
    
    User.findOne({username}, (err, user) => {
        // console.log('user', user);
        console.log('user._id', user._id);
        if (err) {
            console.log('err', err);
            return;
        };
        user = user._id;

        Ingredient.findOne({name: newIngredient}, (err, ingredient) => {
            // console.log('userIngredient', userIngredient);
            console.log('ingredient', {ingredient })
            console.log('ingredient._id', ingredient._id);
                if (err) {
                console.log('err', err);
                return;
            };
            ingredient = ingredient._id;

            console.log('idUser', idUser);
            console.log('idIngredient', idIngredient);
    
            const listIngredient = new ListIngredient({
                ingredient,
                user,
                quantity
            }); 
            
            listIngredient.save((err, listIngredient) => {
                if (err) {
                    res.json({
                        success : false,
                        message : err.toString()
                    });
                    return;
                }
                res.json({
                    success: true,
                    data: listIngredient
                });
            });
        });
    })
});  

module.exports = router;