const express = require('express');
const router = express.Router();
const { categoriesController } = require('../controller/index');

router.get('/categories/:nama', categoriesController.getCategoriesbyName);
router.get('/categories',categoriesController.getCategories);
router.post('/categories',categoriesController.addCategories);
router.put('/categories/:id',categoriesController.editCategories);
router.delete('/categories/:id', categoriesController.deleteCategories);

module.exports = router;