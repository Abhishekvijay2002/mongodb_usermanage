const { default: mongoose } = require("mongoose");

const userscheme = mongoose.Schema({
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
const User = mongoose.model('User', userscheme);
 module.exports = User;