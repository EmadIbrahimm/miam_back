const mongoose = require ('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
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
UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);
=======
const User = mongoose.model('User',userSchema);
>>>>>>> b15b18c060283f9ddd88a1c0d825d1eb2f84187f

module.exports = User;