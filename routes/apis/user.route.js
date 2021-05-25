import express from 'express';
import UserController from '../../controllers/api/user.controller';
import ApiMiddleware from '../../middleware/api.middleware';
import { update, create, get} from '../../validations/api-admin/admin-validation';
import validation from '../../validations/index';

const router = express.Router();

router.get('/', validation(get), ApiMiddleware.checkRole, UserController.getAll);
router.get('/:id', ApiMiddleware.checkRole, UserController.getDetail);
router.post('/',UserController.create);
router.put('/:id', validation(update), ApiMiddleware.checkRole, ApiMiddleware.checkAdmin, UserController.edit);
router.put('/active-user/:id', ApiMiddleware.checkRole, UserController.active);
router.put('/inactive-user/:id', ApiMiddleware.checkRole, UserController.inactive);
router.delete('/:id', ApiMiddleware.checkRole, UserController.delete);

export default router;
