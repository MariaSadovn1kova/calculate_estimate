const Router = require('express')
const router = new Router()
const projectController = require('../controllers/project.controller')

router.post('/project', projectController.createProject)
router.get('/projects', projectController.getProject)
router.get('/projects/finished', projectController.getProjectFinished)
router.get('/projects/unfinished', projectController.getProjectUnfinished)
router.get('/project/:id', projectController.getOneProject)
router.put('/project', projectController.updateProject)
router.delete('/project/:id', projectController.deleteProject)
router.get('/project/:id', projectController.getOneProject)


module.exports = router
