const mongoose = require('mongoose')

const messageScheme = mongoose.Schema({
    conversationId: {
        type: String,
    },
    senderId : {
        type: String
    },
    message: {
        type: String
    }
});

const Messages = mongoose.model('Message', messageScheme)

module.exports = Messages
