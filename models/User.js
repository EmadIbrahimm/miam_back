const mongoose = require ('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
            },
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

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

// Utilisateur de test

User.find({}, (err, users) => {
    if (users.length > 0) {
      return;
    };

    User.register(
        new User({
            username: "Batman",
            firstName: "Bruce",
            lastName: "Wayne",
            dateOfBirth: 1939-05-01,
            photo: '../src/uploads/users/Batman.jpeg'
        }),
        "123456789",
        (err, user) => {
            if (err) {
                console.log("/signup user register err", err);
                // res.render("signup");
                return;
            } else {
                passport.authenticate("local")
            };
        }
    );
});
//  Fin utilisateur de test */

module.exports = User;