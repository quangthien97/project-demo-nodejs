import express from 'express';
import AuthController from '../../controllers/api/auth.controller';
import ApiMiddleware from '../../middleware/api.middleware';
import { login } from '../../validations/api/auth-validation';
import validation from '../../validations/index';

const router = express.Router();

router.post('/logIn', validation(login), AuthController.logIn);
router.post('/logOut', ApiMiddleware, AuthController.logOut);

export default router;
