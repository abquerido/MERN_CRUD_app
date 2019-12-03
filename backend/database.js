const mongoose = require('mongoose')

const URI = 'mongodb://localhost/mern-tasks'

mongoose.connect(URI)
    .then(db => console.log("la base de datos esta conectada "))
    .catch(err =>
        console.log(err))

module.exports = mongoose