import Joi from 'joi';

const create = {
  body: Joi.object({
    title: Joi.string().min(1).max(32).required(),
    description: Joi.string().max(255).required(),
    author: Joi.string().allow(null),
    category: Joi.string().required()
  })
};

const update = {
  body: Joi.object({
    title: Joi.string().min(1).max(32).allow(null),
    description: Joi.string().max(255).allow(null),
    author: Joi.string().allow(null),
    category: Joi.string().allow(null)
  })
};

const get = {
  query: Joi.object({
    page: Joi.number().integer().min(1).allow(null),
    limit: Joi.number().integer().min(1).allow(null)
  })
};

const search = {
  query: Joi.object({
    page: Joi.number().integer().min(1).allow(null),
    limit: Joi.number().integer().min(1).allow(null),
    title: Joi.string().allow(null),
    category: Joi.string().allow(null)
  })
};

export {
  create,
  update,
  get,
  search
};
