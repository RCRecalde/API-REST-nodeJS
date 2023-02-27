const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const usersRoutes = require('./routes/users')


mongoose.Promise = global.Promise
mongoose.set('strictQuery', true)
const url = 'mongodb://127.0.0.1:27017/rest-api'
mongoose.connect(url, { 
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(db => console.log('db connected'))
.catch(err => console.log(err))

//settings
app.set('port', process.env.PORT || 3000);

//routes
app.use('/users', usersRoutes)

//static

//error handlers

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json());


//start server
app.listen(app.get('port'), () => {
    console.log('server running on port ', app.get('port'));
})