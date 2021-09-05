const User = require('./../models/User');
const jwtAuthObj = require('./../helpers/jwtAuth');
class UserController {
  signUpUser = async (req,res,next) => {
    try { 
    const user = await User.create(req.body);
    if(!user) return res.status(500).send({ message: 'Internal Server Error d'});
    return res.status(201).send({message:'User added Successfully',user});
    } catch(error) { 
    next(error);
    }
  } 
}

module.exports = UserController;