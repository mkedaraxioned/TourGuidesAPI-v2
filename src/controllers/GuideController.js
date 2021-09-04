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

  findGuideById = async (req,res,next) => {
    try {
      const guide = await Guide.findById(req.params.id);
      if(!guide) return res.status(404).send({error:'Guide not found'});
      return res.status(200).send({guide});
    } catch (error) {
      next(error);
    }
  }
  
  getGuides = async (req,res,next) => {
    try {
      const guides = await Guide.find();
      if(!guides) return res.status(404).send({error: 'Guides not found'});
      return res.status(200).send({guides});
    } catch (error) {
      next(error);
    }
  }
    
}
module.exports = GuideController;