const express = require('express')

const userController = require('../controllers/userController')
const getAccess = require('../utils/getAccess')
const router = express.Router()

router.route('/:id').get(userController.getUser)
router.route('/:id/updateInfo').patch(getAccess.protected, userController.updateUser)

module.exports = router