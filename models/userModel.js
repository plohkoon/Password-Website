const   mongoose = require('mongoose'),
        passportMongooseLocal = require('passport-local-mongoose'),
//const   Schema = mongoose.Schema;
        userSchema =  new mongoose.Schema({

        });

userSchema.plugin(passportMongooseLocal);

const   model = mongoose.model('User', userSchema);

module.exports = model;
