const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
// console.log('UserModel', UserModel);
// multer configurations
// const fs = require('fs');
// const multer  = require('multer');
// const upload = multer({ dest: 'src/uploads/' }); 

router.get('/', (req, res) => {
    // console.log('requestemad',req)
    UserModel.find({}, (err, users)=> {
        console.log('users', users);
        if (err) {
            res.json({
                success : false,
                message : err.toString()
            });
            return;
        }
        res.json({
            success: true,
            data: users
            
        });
        console.log('res.status(status).json(obj)',res.status());
    });
});



router.get('/:id', (req, res) => {
    UserModel.findOne({ _id: req.params.id }, (err, users)=> {
        if (err) {
            res.json({
                success : false,
                message : err.toString()
            });
            return;
        }
        res.json({
            success: true,
            data: users
        });
    });
});

//upload.single('photo'),
router.post('/',  (req, res) => { 
    console.log('POST /users req.body', req.body);
    console.log('POST /users req.file', req.file);
   const {
        username = '',
        firstname= '',
        lastname = '',
        password= '',
        // photo = '',
      } = req.body;

      const photo = req.body.photo;
      
    
      const user = new UserModel({
        username,
        firstname,
        lastname,
        password,
        photo
      }); 
    
      user.save((err, users) => {
        if (err) {
            res.json({
                success : false,
                message : err.toString()
            });
            return;
        }
        res.json({
          success: true,
          data: users
        });
      });

});


// @Emad 
// router.put('/', (req, res) => {
//     // add ingredients 
// });


// router.delete('/', (req, res) => {
//     // delete ingredients
// });

module.exports = router;