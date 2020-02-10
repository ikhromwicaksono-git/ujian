const express = require('express');
const { productCatController } = require('../controller/index')
const router = express.Router();

router.get('/productCategory', productCatController.getAllProCat);
router.post('/productCategory',productCatController.addProCat);
router.delete('//productCategory/:id',productCatController.deleteProdCat)

module.exports = router