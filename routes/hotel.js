const router = require("express").Router();
const hotelController = require('../controllers/hotelControllers');
const {verifyToken} = require("../middleware/jwt_token")

router.get('/:id', hotelController.getHotelById)
router.get('/byCountry/:id', hotelController.getHotelsByCountry)
router.get('/search/:key', hotelController.search)
router.post('/', hotelController.addHotel)

module.exports = router;

