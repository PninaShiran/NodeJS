const express = require('express');
const router = express.Router();
const controllerProduct = require('../controller/product');

router.get("/",controllerProduct.get);
router.post("/", controllerProduct.post);
router.delete("/:id", controllerProduct.delete);

module.exports = router;