const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/StudentDB', {}, err => {
    if (!err) {
        console.log('Connection succeeded')
    } else {
        console.log('Error in connection' +err)
    }
})

require('./student.model')