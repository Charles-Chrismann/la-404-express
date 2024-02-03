const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function me(req, res) {
    const user = await prisma.user.findUnique({
        where: {
            id: req.userId
        }
    })
    res.send(user)
}

module.exports = {
    me
}