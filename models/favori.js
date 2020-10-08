const mongoose=require('mongoose');
//* const passportLocalMongoose=require('passport-local-mongoose'); do we need passport here ? !! *//

const favoriSchema=new mongoose.Schema({
    User : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    recipe : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    },
    created: {
        type:Date,
        default:Date.now
    },
});

const Favori = mongoose.model('Favori',favoriSchema);

module.exports = Favori;