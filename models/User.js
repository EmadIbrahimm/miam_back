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

<<<<<<< HEAD
userSchema.plugin(passportLocalMongoose);

=======
>>>>>>> cbd7a68853fb6777bae321c72c6dd131147d8f71
const User = mongoose.model('User',userSchema);

module.exports = User ;