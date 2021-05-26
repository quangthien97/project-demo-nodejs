import express from 'express';
import CategoryController from '../../controllers/api/category.controller';
import ApiMiddleware from '../../middleware/api.middleware';
import { get } from '../../validations/api/category-validation';
import validation from '../../validations/index';

const router = express.Router();

router.get('/', validation(get), ApiMiddleware.checkRole, CategoryController.getAll);
router.post('/', CategoryController.create);

export default router;
