import express from 'express'
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';
import multer from 'multer';

const router = express.Router()
const upload = multer({ dest: 'uploads/' });

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, upload.array('files'), sendMessage);


export default router