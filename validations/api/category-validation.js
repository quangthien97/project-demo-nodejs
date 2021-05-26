import Joi from 'joi';

const user = {
  query: Joi.object({
    page: Joi.number().integer().min(1).allow(null),
    limit: Joi.number().integer().min(1).allow(null)
  })
};

export {
  user
};
