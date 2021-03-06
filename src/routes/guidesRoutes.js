const express = require('express');
const router = express.Router({ mergeParams:true });
const GuideController = require('../controllers/GuideController');
const guideControllerObj = new GuideController();
const errorHandler = require('../middlewares/error');
//JOI validation schema
const schemas =  require('../helpers/schema');
const validateData = require('../middlewares/validation');
const AuthMiddleware = require('./../middlewares/auth');
const auth = new AuthMiddleware();

router.use(auth.authenticateToken);
router.route('/')
.post(validateData(schemas.guide),guideControllerObj.addGuide)
.get(guideControllerObj.getGuides);
router.route('/id/:id')
.get(guideControllerObj.findGuideById)
.put(validateData(schemas.guide),guideControllerObj.updateGuide)
.patch(validateData(schemas.guide),guideControllerObj.updateGuide)
.delete(guideControllerObj.deleteGuide);

router.use(errorHandler);

module.exports = router;