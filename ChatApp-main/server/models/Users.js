const mongoose = require('mongoose')

const userScheme = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    }
});

const Users = mongoose.model('Users', userScheme)

module.exports = Users;
