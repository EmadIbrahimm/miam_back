const express = require('express');
const router = express.Router();
const ListIngredient = require('../models/listIngredient');
const User = require('../models/user');
const Ingredient = require('../models/ingredient');

console.log('ListIngredient', ListIngredient);
 
router.get('/', (req, res) => {
    console.log('GET /listIngredient');
    const {
        user = '',
    } = req.body;

    ListIngredient.find({user})
    .populate('ingredient')
    .exec((err, listIngredient) => {
        if (err) {
            res.json({
                success : false,
                message : err.toSting()
            });
            return;
        };

        console.log("listIngredient.ingredient", listIngredient.ingredient);
        console.log("listIngredient.quantity", listIngredient.quantity);

        res.json({
            success: true,
            data: listIngredient
        });
    });
});

// router.get('/', (req, res) => {
//     console.log('GET /listIngredient');
//     ListIngredient.find({}, (err, listingredients)=> {
//     if (err) {
//       res.json({
//           success : false,
//           message : err.toSting()
//       });
//       return;
//   }
//       res.json({
//           success: true,
//           data: listingredients
//       });
//   });
// });

router.post('/', (req, res) => {
    console.log('POST /listIngredient');
    console.log('POST /listIngredient req.body', req.body);
    
    const username = req.body.username;
    const ingredient = req.body.ingredient;
    const quantity = req.body.quantity;
    var idUser = '';
    var idIngredient = '';
    
    User.findOne({username}, (err, user) => {
        console.log('user', user);
        console.log('user._id', user._id);
        if (err) {
            console.log('err', err);
            return;
        };
        user = user._id;

        // console.log('ingredient')
        Ingredient.findOne({name: ingredient}, (err, userIngredient) => {
            console.log('userIngredient', userIngredient);
            console.log('userIngredient._id', userIngredient._id);
                if (err) {
                console.log('err', err);
                return;
            };
            ingredient = userIngredient._id;

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
                        message : err.toSting()
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