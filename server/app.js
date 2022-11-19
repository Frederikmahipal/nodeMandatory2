const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

mongoose.connect('mongodb://localhost/users', {
}, () => {
    console.log('connected')
})

const routes = require('./routes/routes')

app = express()

app.use(cookieParser())
app.use(cors({
    credentials: true,
    //insert frontend later
    origin: [ 'http://localhost:8080']
}))

app.use(express.json())

app.use('', routes)

app.listen(8080)
console.log('running on 8080')