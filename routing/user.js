const express = require('express');
const router = express.Router();
const controllerUser = require('../controller/user');

router.post("/",controllerUser.post);
router.post("/check",controllerUser.checkUser);

module.exports = router;
