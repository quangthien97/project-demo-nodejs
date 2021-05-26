import Joi from 'joi';
import { constants } from '../../core/constants.js';
const { userRoles } = constants;

const create = {
  body: Joi.object({
    userName: Joi.string().min(8).max(32).required(),
    password: Joi.string().min(8).max(32).required(),
    firstName: Joi.string().min(8).max(32).required(),
    lastName: Joi.string().min(8).max(32).required(),
    role: Joi.string().valid(...[userRoles.user, userRoles.admin]).allow(null)
  })
};

const update = {
  body: Joi.object({
    password: Joi.string().min(8).max(32).allow(null),
    firstName: Joi.string().min(8).max(32).allow(null),
    lastName: Joi.string().min(8).max(32).allow(null),
    role: Joi.string().valid(...[userRoles.user, userRoles.admin]).allow(null)
  })
};

const get = {
  query: Joi.object({
    page: Joi.number().integer().min(1).allow(null),
    limit: Joi.number().integer().min(1).allow(null)
  })
};

export {
  create,
  update,
  get
};
