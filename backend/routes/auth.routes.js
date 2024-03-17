import express from 'express'
import { signup, login, logout } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/signup');

router.get('/login');

router.get('/logout');

export default router;
