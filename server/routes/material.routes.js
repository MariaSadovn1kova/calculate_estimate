const Router = require('express')
const router = new Router()
const materialController = require('../controllers/material.controller')

router.get('/materials/reinforcement', materialController.getReinforcement)
router.get('/materials/brick', materialController.getBrick)
router.get('/materials/board', materialController.getBoard)
router.get('/materials/concrete', materialController.getConcrete)
router.get('/materials/block', materialController.getBlock)
router.get('/materials/beam', materialController.getBeam)
router.get('/materials/other', materialController.getOther)
router.put('/materials', materialController.updateMaterial)
router.delete('/materials/:id', materialController.deleteMaterial)
router.post('/materials', materialController.createMaterial)

module.exports = router

