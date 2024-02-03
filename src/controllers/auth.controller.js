const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function register(req, res) {
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
}

async function login(req, res) {
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
}

module.exports = {
    register,
    login
}