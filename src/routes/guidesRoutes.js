const express = require('express');
const router = express.Router({ mergeParams:true });
const GuideController = require('../controllers/GuideController');
const guideControllerObj = new GuideController();
const errorHandler = require('../middlewares/error');
//JOI validation schema
const schemas =  require('../helpers/schema');
const validateData = require('../middlewares/validation');
router.route('/')
.post(validateData(schemas.guide),guideControllerObj.addGuide)
.get(guideControllerObj.getGuides);
router.route('/id/:id')
.get(guideControllerObj.findGuideById);

router.use(errorHandler);

module.exports = router;