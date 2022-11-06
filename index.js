// require packages

const express = require('express')
const cors = require('cors')
// connect to mongo
require('./models')

// app config/ middlwares
const app = express()
const PORT = 8000
// parse json requiest bodies
app.use(express.json())
app.use(cors())

// routes/controllers

app.get('/', (req, res) => {
    res.json({ msg: 'welcome' })
})

app.use('/tasks', require('./controllers/organizer'))

// listening
app.listen(PORT, () => console.log(`litening on ${PORT}`))
