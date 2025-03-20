const { default: mongoose } = require("mongoose");

// creating a schema
const userscheme = mongoose.Schema({
    // name:String,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },

});
// creating a model
const User = mongoose.model('User', userscheme);
 module.exports = User;