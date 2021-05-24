import express from 'express';
import CategoryController from '../../controllers/api/category.controller';
import ApiMiddleware from '../../middleware/api.middleware';

const router = express.Router();

router.get('/', ApiMiddleware.checkRole, CategoryController.getAll);

export default router;
