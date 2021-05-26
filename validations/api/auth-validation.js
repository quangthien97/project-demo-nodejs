import Joi from 'joi';

const login = {
  body: Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required()
  })  
};

export {
  login
};
