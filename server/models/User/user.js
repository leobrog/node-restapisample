const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName : {
        type : String,
        required: true,
        maxlength: 60
    },
    lastName : {
        type : String,
        required: true,
        maxlength: 60
    },
    email : {
        type: String,
        required: true,
        maxlength: 200,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type: String,
        required:  true,
        minlength: 8,
        maxlength: 100
    },
    admin : {
        type: Boolean,
        default: false
    },
    isVerified : {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('User', userSchema);