const express = require('express')
const router = express.Router()
const { getAllProducts, getProductById, } = require('../controller/productControllers')
router.get('/', getAllProducts, (req, res) => {
})

router.get('/:id', getProductById, (req, res) => {

})
module.exports = router;
