import express from 'express';
import AuthController from '../../controllers/api/auth.controller';
import ApiMiddleware from '../../middleware/api.middleware';
import { user } from '../../validations/api/user-validation';
import validation from '../../validations/index';

const router = express.Router();

router.post('/logIn', validation(user), AuthController.logIn);
router.post('/logOut', ApiMiddleware, AuthController.logOut);

export default router;
