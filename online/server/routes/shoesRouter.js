const Router = require('express')
const router = new Router()
const shoesController = require('../controllers/shoesController')

router.post('/', shoesController.creat)
router.get('/', shoesController.getAll)
router.get('/:id', shoesController.getOne)

module.exports = router