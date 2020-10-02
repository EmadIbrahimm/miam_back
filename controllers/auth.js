const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const multer  = require('multer');
const upload = multer({ dest: 'src/uploads/' }); 
const User = require('../models/user');
const fs = require('fs');

const router = express.Router();

router.get("/", (req, res) => {
    console.log("GET /");
    return;
});

router.get("/admin", (req, res) => {
    console.log("GET /admin");
    if (req.isAuthenticated()) {
        console.log('req.user', req.user);
        return;
    } else {
        res.redirect("/");
    }
});

router.get("/signup", (req, res) => {
    console.log("GET /signup");
    if (req.isAuthenticated()) {
        console.log(req.user);
        console.log('GET/signup ok go to admin');
        res.redirect("/admin");
    } else {
        // res.render("signup");
        return;
    }
});

router.post("/signup", upload.single('photo'), (req, res) => {
    console.log("POST /signup");

    // console.log('file path', req.file.path )

    const fileName = req.body.username + '.' + req.file.mimetype.slice(6) // Get file extension (jpeg, gif, png)
    const username = req.body.username;
    const password = req.body.password;
    const confirmation = req.body.confirmation;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const dateOfBirth = req.body.dateOfBirth;
    const photo = '../src/uploads/' + fileName;
    
    fs.rename( req.file.path, 'src/uploads/' + fileName, (err) => {
        if (err !== null) {
            console.log('renaming error', err);
            return;
        };
        console.log('file successfully renamed');
    });

    User.register(
    new User({
        username,
        firstName,
        lastName,
        dateOfBirth,
        photo
    }), 
    password, // password will be hashed
        (err, user) => {
            if (err) {
                console.log("/signup user register err", err);
                // res.render("signup");
                return;
            } else {
                passport.authenticate("local")(req, res, () => {
                    console.log('POST/signup ok go to admin')
                    res.redirect("/admin");
                });
            }
        }
    );
});

router.get("/login", (req, res) => {
    if (req.isAuthenticated()) {
        console.log('Is authenticated');
        console.log('req.isAuthenticated()', req.isAuthenticated());
        res.redirect("/admin");
    } else {
        console.log("Isn't authenticated");
        console.log('req.isAuthenticated()', req.isAuthenticated());
        // res.render("login");
        return;
    }
});

router.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/admin",
        failureRedirect: "/login"
    })
);

router.get("/logout", (req, res) => {
    console.log("GET /logout");
    req.logout();
    res.redirect("/");
});

module.exports = router;