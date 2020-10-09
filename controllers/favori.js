const express = require('express');
const router = express.Router();
const FavoriModel = require('../models/favori');
console.log('FavoriModel', FavoriModel);


router.get('/', (req, res) => {
    FavoriModel.find({}, (err, favoris)=> {
        if (err) {
            res.json({
                success : false,
                message : err.toString()
            });
            return;
        }
        res.json({
            success: true,
            data: favoris
        });
    });
});




router.put('/', (req, res) => {
    // add favori 
});


router.delete('/', (req, res) => {
    // delete favori
});

module.exports = router;