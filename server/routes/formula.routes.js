const Router = require('express')
const router = new Router()
const formulaController = require('../controllers/formula.controller')

router.get('/formulas', formulaController.getFormulas)
router.get('/formula/:id', formulaController.getTechnicalFormula)
router.put('/formula', formulaController.updateFormula)

module.exports = router