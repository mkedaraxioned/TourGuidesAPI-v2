const Guide = require('./../models/Guide');
class GuideController {
  //Add new guide
  addGuide = async (req,res,next) => {
    try {
      const guide = await Guide.create(req.body);
      if(!guide) return res.status(500).send({error: 'Internal Server Error'});
      return res.status(201).send({message:'Guide added Successfully',guide});
      } catch(error) { 
      next(error);
      }
  }
}
module.exports = GuideController;