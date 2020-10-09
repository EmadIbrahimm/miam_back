require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('./models/user');

const authController = require('./controllers/auth'); 
const listIngredientController = require('./controllers/listIngredient');
const recipeController = require('./controllers/recipe');
const userController = require('./controllers/user');
const ingredientController = require('./controllers/ingredient.js');
const favoriController = require('./controllers/favori'); 

// DB connection from config
const connectDB = require('./config/db')

connectDB()
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



/* Connection & connect params   connection has been removed to config file  3/10 Emad */
const port = process.env.PORT || 3000;

/* End: Connection & connect params // connection has been removed to config file  3/10 Emad */

/* Routes */
app.use('/', authController); // Didier
app.use('/ingredients', ingredientController);
app.use('/users', userController);
app.use('/recipes', recipeController);
app.use('/listingredients', listIngredientController);
app.use('/favoris', favoriController);
/* End: Routes */

app.listen(port, ()=>{
    console.log(`Server started on port : ${port}!`)
});