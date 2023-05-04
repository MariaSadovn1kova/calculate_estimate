const Router = require('express')
const router = new Router()
const projectController = require('../controllers/project.controller')

router.post('/project', projectController.createProject)
router.get('/project', projectController.getProject)
router.get('/project/:id', projectController.getOneProject)
router.put('/project', projectController.updateProject)
router.delete('/project/:id', projectController.deleteProject)

module.exports = router
