import express from 'express';
import BookController from '../../controllers/api/book.controller';
import ApiMiddleware from '../../middleware/api.middleware';
import {
  create,
  update,
  get,
  search,
} from '../../validations/api/book-validation';
import validation from '../../validations/index';

const router = express.Router();

router.get(
  '/',
  validation(get),
  ApiMiddleware.checkLogin,
  BookController.getAll
);
router.get('/:id', ApiMiddleware.checkLogin, BookController.getDetail);
router.get(
  '/search/',
  validation(search),
  ApiMiddleware.checkLogin,
  BookController.search
);
router.post(
  '/',
  validation(create),
  ApiMiddleware.uploadFile,
  ApiMiddleware.checkLogin,
  ApiMiddleware.checkRole,
  BookController.create
);
router.put(
  '/:id',
  validation(update),
  ApiMiddleware.uploadFile,
  ApiMiddleware.checkLogin,
  ApiMiddleware.checkRole,
  BookController.edit
);
router.delete(
  '/:id',
  ApiMiddleware.checkLogin,
  ApiMiddleware.checkRole,
  BookController.delete
);

export default router;
