const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');

const userSchema=new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    photo: String,
    dateOfBirth: Date,
    created: {
        type:Date,
        default:Date.now
    },
});

const User = mongoose.model('User',userSchema);

module.exports = User ;