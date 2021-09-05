const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const tourSchema = Joi.object({
  place:Joi.string(),
  tourFee: Joi.number()
});
const schemas = {
  user: Joi.object({
    name: Joi.string()
    .min(3)
    .max(30)
    .required(),    
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  }),
  guide: Joi.object({
    name: Joi.string()
    .min(3)
    .max(30),
    photo: Joi.string(),  
    experience:Joi.number(),
    charges: Joi.number(),
    tour: Joi.array().items( tourSchema ),
  })
}

module.exports = schemas;