const express = require('express');
const { productsController } = require('../controller/index')
const router = express.Router();

router.get('/products', productsController.getAllProducts);
router.post('/products',productsController.addProduct);
router.put('/products/:id',productsController.editProduct);
router.delete('/products/:id',productsController.deleteProduct)




module.exports = router
