import express from "express";
import { index, create } from "../controllers/posts.js";

const router = express.Router();

router.get("/", index);
router.post("/", create);

export default router;
