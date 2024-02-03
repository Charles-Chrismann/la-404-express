require('dotenv').config()
const express = require('express')
const cors = require('cors')
const appRoute = require('./routes')
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use('/api', appRoute)

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})