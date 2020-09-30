const { strict } = require('assert');
const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    email : String,
    password : String,
    photo:String,
    dateOfBirth : { type : Date },
    created:{
        type:Date,
        default:Date.now
    },

});

const User = mongoose.model('User',userSchema);

module.exports = User ;