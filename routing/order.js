const express = require('express');
const router = express.Router();
const controllerOrder = require('../controller/order');

router.post("/",controllerOrder.post);

module.exports = router;