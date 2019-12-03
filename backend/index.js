const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const cors = require('cors')

const { mongoose } = require('./database')

//settings
app.set('port', process.env.PORT || 3001)

//middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

//Routes 
app.use('/api/tasks', require('./routes/task.routes'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

// starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);

})