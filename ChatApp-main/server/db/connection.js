const mongoose = require('mongoose')

const url = 'mongodb+srv://chat_app:chat_app@cluster0.bh3jf4i.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url).then(()=> console.log('Connected to DB')).catch((e)=>console.log('Error' , e))
