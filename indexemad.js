require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/user');
const Ingredients = require('./models/ingredients');
const ListIngredients = require('./models/ListIngredients');
const recipes = require('./models/recipes');

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
});

app.listen(port, ()=>{
    console.log(`Server started on port : ${port}!`)
});