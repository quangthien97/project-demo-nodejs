import Joi from 'joi';

const user = {
  body: Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required()
  })  
};

export {
  user
};
