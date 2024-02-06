const mongoose = require('mongoose')

const conversationScheme = mongoose.Schema({
    members: {
        type: Array,
        required: true,
    }
});

const Conversation = mongoose.model('Conversation', conversationScheme)

module.exports = Conversation;
