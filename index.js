require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const prisma = new PrismaClient()
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.get('/api', (req, res) => {
    res.send('Hello World !')
})

const products = []
app.post('/api/products', (req, res) => {
    console.log(req.body)
    products.push(req.body)
    res.send(products)
})

app.post("/api/auth/register", async (req, res) => {
    const { username, password } = req.body
    const passwordHash = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
        data: {
            username,
            passwordHash 
        }
    })
    delete user.passwordHash
    res.send(user)
})

app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body
    const user = await prisma.user.findFirst({
        where: {
            username
        }
    })
    if(!user) return res.status(401).send('user not found')
    const isPasswordOkay = await bcrypt.compare(password, user.passwordHash)
    console.log(isPasswordOkay)
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
    res.send(token)
})

function auth(req, res, next) {
    // "Bearer notreJWTkhssijfbskjhjkqsds"
    const bearer = req.headers.authorization
    const token = bearer.split(' ')[1]
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = payload.userId
    next()
}

app.get('/api/users/me', auth, async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.userId
        }
    })
    res.send(user)
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})