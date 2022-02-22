const router = require('express').Router()
const pageCtrl = require('../controllers/pagesCtrl');

router.get('/', pageCtrl.homePage);
router.get('/aboutUs', pageCtrl.aboutPage);
router.get('/register', pageCtrl.registerPage);
router.get('/team', pageCtrl.team);
router.get('/location', pageCtrl.location)

module.exports = router;