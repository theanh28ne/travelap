const router = require("express").Router();
const userController = require('../controllers/userController')
const {verifyToken} = require("../middleware/jwt_token")

router.delete('/:id', userController.deleteUser)
router.get('/:id',userController.getUser)

module.exports = router;