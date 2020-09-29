const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('GET logout/ logout.js');
    req.logout();
    res.redirect('../'); // To redirect to the good bye page
});

module.exports = router;