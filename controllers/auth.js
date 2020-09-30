const express = require('express');
const expressSession = require("express-session");
const MongoStore = require("connect-mongo")(expressSession);

const router = express.Router();

const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { session } = require("passport");
const multer  = require('multer');
const upload = multer({ dest: 'src/uploads/' }); 
const User = require('../models/User');

const app = express();


/* authorization session manage */  
app.use(expressSession({
    secret: "9UI]SWà0:{m£SYxkl$D]FS-mvXH€q:*F",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

/* Passport configuration */
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
/* End: passport config */

/* route GET/ */
router.get('/', (req, res)=>{
    console.log('GET / ');
    console.log('signup',req.body)
});
/* End: route GET/ */

/* route POST/signup */
router.post('/signup', upload.single('photo'), (req, res) => {
    console.log('POST /signup');
    // console.log('signup',req.body)
    // console.log('singing up ...');
    // console.log('singing req.body', req.body);
    // console.log('Singup req.file',req.file)
    // console.log('Singup req.user',req.user)
    // console.log('Singup req.file',req.file.mimetype)
    // console.log('Singup req.file.mimetype.slice(6)',req.file.mimetype.slice(6))
   
    const photoExt = req.file.mimetype.slice(6)
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const dateOfBirth = req.body.dateOfBirth;
    const photo = '../src/uploads/' + req.file.filename + '.' + photoExt;

    console.log('Singup username', username);
    console.log('Singup password', password);
    console.log('Singup firstName', firstName);
    console.log('Singup lastName', lastName);
    console.log('Singup dateOfBirth', dateOfBirth);
    console.log('Singup photo', photo);

    User.register(
        new User({
            username,
            firstName,
            lastName,
            dateOfBirth,
            photo
        }),
        password, 
        (err, user) => {
            if (err) {
                console.log("/signup user register err", err);
                return;
            } else {
                passport.authenticate("local")(req, res, () => {
                    // console.log('req', req.body)
                    // console.log('res', res)
                    return;
                });
            }
        });   
    }
);
/* End: route POST/signup */

// /* route POST/login */
// router.get('/login', function (req, res) {
//     console.log('GET /login');
//     if (req.isAuthenticated()) {
//       return;
//     } else {
//       const user = req.user || {};
//       const paramsTpl = {
//         user: user,
//         isAuthenticated: req.isAuthenticated(),
//         isAdmin: user.role === 'admin',
//         page: defaults.page,
//         scripts: defaults.scripts,
//         stylesheets: defaults.stylesheets,
//         isLoginPage: true,
//       };
//       console.log('GET /login paramsTpl', paramsTpl);
//       res.render('auth/login', paramsTpl);
//     }
//   });
// /* End: route POST/login */

router.get('/logout', (req, res) => {
    console.log('GET logout/ logout.js');
    req.logout();
    res.redirect('../');
});

module.exports = router;