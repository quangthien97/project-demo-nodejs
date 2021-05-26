import express from 'express';
import UserController from '../../controllers/api/user.controller';
import ApiMiddleware from '../../middleware/api.middleware';
import {
  update,
  create,
  get,
} from '../../validations/api/user-validation';
import validation from '../../validations/index';

const router = express.Router();

router.get(
  '/',
  validation(get),
  ApiMiddleware.checkLogin,
  ApiMiddleware.checkRole,
  ApiMiddleware.checkAdmin,
  UserController.getAll
);
router.get(
  '/:id',
  ApiMiddleware.checkLogin,
  ApiMiddleware.checkRole,
  ApiMiddleware.checkAdmin,
  UserController.getDetail
);
router.post(
  '/',
  validation(create),
  ApiMiddleware.checkLogin,
  ApiMiddleware.checkRole,
  ApiMiddleware.checkAdmin,
  UserController.create
);
router.put(
  '/:id',
  validation(update),
  ApiMiddleware.checkLogin,
  ApiMiddleware.checkRole,
  ApiMiddleware.checkAdmin,
  UserController.edit
);
router.put(
  '/active-user/:id',
  ApiMiddleware.checkLogin,
  ApiMiddleware.checkRole,
  ApiMiddleware.checkAdmin,
  UserController.active
);
router.put(
  '/inactive-user/:id',
  ApiMiddleware.checkLogin,
  ApiMiddleware.checkRole,
  ApiMiddleware.checkAdmin,
  UserController.inactive
);
router.delete(
  '/:id',
  ApiMiddleware.checkLogin,
  ApiMiddleware.checkRole,
  ApiMiddleware.checkAdmin,
  UserController.delete
);

export default router;
