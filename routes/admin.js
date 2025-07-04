const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/product');

const products = [];


router.get('/add-product',productsController.getAddProduct);

router.post('/add-product',productsController.postAddProduct);

// exports.routes = router;
// exports.products = products;

module.exports = router;