const products = []

function create(req, res) {
    console.log(req.body)
    products.push(req.body)
    res.send(products)
}

module.exports = {
    create
}