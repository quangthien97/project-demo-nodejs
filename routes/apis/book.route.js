import express from 'express';
import BookController from '../../controllers/api/book.controller';
import ApiMiddleware from '../../middleware/api.middleware';

const router = express.Router();

router.get('/', ApiMiddleware.checkRole, BookController.getAll);
router.post('/', ApiMiddleware.checkRole, BookController.create);

export default router;
