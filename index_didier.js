require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/User');
const Ingredient = require('./models/Ingredient');
const ListIngredient = require('./models/ListIngredient');
const Recipe = require('./models/Recipe');

const ingredientRoutes = require('./models/Ingredient.js'); 
const logoutRoutes = require('./controllers/logout.js'); 

const port = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/miam',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },  
    (err)=>{
        if (err === null) {
            console.log('DB is connected')
        }
    }
);

/* Connection and deconnection routes */
app.use('/logout', logoutRoutes);
// app.use('/signup', signupRoutes);
// app.use('/login', loginRoutes);
app.use('/ingredient', ingredientRoutes);



app.listen(port, ()=>{
    console.log(`Server started on port : ${port}!`)
});