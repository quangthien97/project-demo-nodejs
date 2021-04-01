import Joi from 'joi';
import { constants } from '../../core/constants.js';

let { adminRoles } = constants;

const get = {
  query: Joi.object({
    page: Joi.number().integer().allow(null),
    limit: Joi.number().integer().allow(null)
  })
};

const update = {
  body: Joi.object({
    name: Joi.string().allow(null),
    password: Joi.string().allow(null),
    role: Joi.string().valid(...[adminRoles.staff, adminRoles.admin])
  })
};

const create = {
  body: Joi.object({
    name: Joi.string().allow(null),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid(...[adminRoles.staff, adminRoles.admin]).allow(null)
  })
};

export {
  update,
  create,
  get
};
