import express from 'express';
import { getPostByID } from '../controllers/posts.controller.js';
const router = express.Router();

router.route("/public/:id").get(getPostByID);

export default router;