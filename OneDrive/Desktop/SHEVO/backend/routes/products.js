const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
router.get('/', async (req, res) => {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
});
router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
});
module.exports = router;