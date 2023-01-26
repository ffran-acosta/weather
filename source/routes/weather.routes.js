const {Router} = require("express");
const router = Router();
const controller = require('../controller/weather.controller');

router.get('/', controller.home)

module.exports = router