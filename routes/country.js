const router = require("express").Router();
const countryController = require('../controllers/countryControllers');
const {verifyToken} = require("../middleware/jwt_token")

router.get('/:id', countryController.getCountry)
router.post('/places', countryController.addPlacesToCountry)
router.post('/', countryController.addCountry)
router.get('/', countryController.getCountries)

module.exports = router;