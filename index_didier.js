require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const authController = require('./controllers/auth'); 

const app = express();

/* Connection & connect params */
const port = process.env.PORT || 3000;

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
/* End: Connection & connect params */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/* Routes */
app.use('/', authController);
/* End: Routes */



app.listen(port, ()=>{
    console.log(`Server started on port : ${port}!`)
});