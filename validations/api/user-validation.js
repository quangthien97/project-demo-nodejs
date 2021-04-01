import Joi from 'joi';

const user = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })  
};

export {
  user
};
