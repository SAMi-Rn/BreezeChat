import express from 'express'
import { signup, login, logout } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup');

router.post('/login');

router.post('/logout');

export default router;
