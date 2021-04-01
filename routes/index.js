import express from 'express';
import authRoute from './apis/auth.route';
import userRoute from './apis/user.route';

const router = express.Router();

router.use('/auth', authRoute);
router.use('/user', userRoute);

export default router;
