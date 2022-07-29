const controller = require('../controller/xController')
const express = require('express')

const router = express.Router()
router.get("/biblioteca", controller.getAllAulas)

module.exports = router