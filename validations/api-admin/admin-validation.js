import Joi from 'joi';
import { constants } from '../../core/constants.js';

let { userRoles } = constants;

const get = {
  query: Joi.object({
    page: Joi.number().integer().allow(null),
    limit: Joi.number().integer().allow(null)
  })
};

const update = {
  body: Joi.object({
    password: Joi.string().allow(null),
    role: Joi.string().valid(...[userRoles.user, userRoles.contributor])
  })
};

const create = {
  body: Joi.object({
    // password: Joi.string().required(),
    // role: Joi.string().valid(...[userRoles.user, userRoles.contributor]).allow(null)
  })
};

export {
  update,
  create,
  get
};
