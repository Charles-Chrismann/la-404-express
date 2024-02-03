const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    // "Bearer notreJWTkhssijfbskjhjkqsds"
    const bearer = req.headers.authorization
    const token = bearer.split(' ')[1]
    console.log(token)
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = payload.userId
    next()
}

module.exports = auth