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

const user = new User({
    username:'playing',
    firstname:'noone',
    lastname:'donthave',
    dateOfBirth : 11/04/1980,
    email : 'email@gmail.com',
    password:'okokokok',

  });
  
  user.save((err,userDb)=>{
//     console.log('err',err);
//    console.log('userDb',userDb)

});
  

module.exports = User ;