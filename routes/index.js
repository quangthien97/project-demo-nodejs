import express from 'express';
import authRoute from './apis/auth.route';
import userRoute from './apis/user.route';
import categoryRoute from './apis/category.route';
import bookRoute from './apis/book.route';

const router = express.Router();

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/book', bookRoute);
router.use('/category', categoryRoute);

export default router;
