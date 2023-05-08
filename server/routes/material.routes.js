const Router = require('express')
const router = new Router()
const materialController = require('../controllers/material.controller')

router.get('/materials/reinforcement', materialController.getReinforcement)

module.exports = router

