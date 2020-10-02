const express = require('express');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const multer  = require('multer');
const upload = multer({ dest: 'src/uploads/' }); 
const User = require('../models').User;

const router = express.Router();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    expressSession({
        secret: '9UI]SWà0:{m£SYxkl$D]FS-mvXH€q:*F',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.get("/", (req, res) => {
    console.log("GET /");
});

router.get("/admin", (req, res) => {
    console.log("GET /admin");
    if (req.isAuthenticated()) {
        console.log('req.user', req.user);
        res.render("admin");
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
        res.render("signup");
    }
});

router.post("/signup", upload.single('photo'), (req, res) => {
    console.log("POST /signup");

    const photoExt = req.file.mimetype.slice(6) // Get file extension (jpeg, gif, png)
    const username = req.body.username;
    const password = req.body.password;
    const confirmation = req.body.confirmation;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const dateOfBirth = req.body.dateOfBirth;
    const photo = '../src/uploads/' + req.file.filename + '.' + photoExt;


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
                return res.render("signup");
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
        // res.redirect("/admin");
    } else {
        console.log("Isn't authenticated");
        console.log('req.isAuthenticated()', req.isAuthenticated());
        // res.render("login");
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