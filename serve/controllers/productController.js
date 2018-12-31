const product = require('../models').product

const productController = {
	index(req, res) {
		product.find({}).then(ress => res.json(ress))
	}
}

module.exports = productController