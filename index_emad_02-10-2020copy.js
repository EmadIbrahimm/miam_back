require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const ListIngredientRoutes = require('./controllers/listIngredient');
const RecipeRoutes = require('./controllers/recipe');
const UserRoutes = require('./controllers/user');
const IngredientRoutes = require('./controllers/ingredient.js');
const favoriRoutes = require('./controllers/favori'); 
// const logoutRoutes = require('./controllers/logout.js'); 

const port = process.env.PORT ||   3003;

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

app.use('/ingredients', IngredientRoutes);
app.use('/users', UserRoutes);
app.use('/recipes', RecipeRoutes);
app.use('/listingredients', ListIngredientRoutes);
app.use('/favoris', favoriRoutes);


app.listen(port, ()=>{
    console.log(`Server started on port : ${port}!`)
});