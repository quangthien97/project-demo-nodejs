import express from 'express';
import BookController from '../../controllers/api/book.controller';
import ApiMiddleware from '../../middleware/api.middleware';

const router = express.Router();

router.get('/', BookController.getAll);
router.post('/', ApiMiddleware.uploadFile, ApiMiddleware.checkRole, BookController.create);
router.put('/:id', ApiMiddleware.uploadFile, ApiMiddleware.checkRole, BookController.edit);
router.delete('/:id', ApiMiddleware.checkRole, BookController.delete);

export default router;
