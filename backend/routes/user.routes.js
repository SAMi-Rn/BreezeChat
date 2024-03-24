import express from 'express'
import { getUsers, updateUserProfile } from '../controllers/user.controller.js';
import protectRoute from '../middleware/protectRoute.js'
const router = express.Router()

router.get("/", protectRoute, getUsers)
router.put("/:id", protectRoute, updateUserProfile); 

export default router