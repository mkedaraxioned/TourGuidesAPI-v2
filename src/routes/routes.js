const express = require('express');
const userRoutes = require('./userRoutes');
const guidesRoutes = require('./guidesRoutes');
const router = express.Router({ mergeParams:true });
router.use('/user',userRoutes);
router.use('/guides',guidesRoutes);
router.use((req, res, next) => {
  return res.status(500).send({error: 'Internal Server error'});
});
module.exports = router;