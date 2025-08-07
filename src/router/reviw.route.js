import express from "express";
import { createReview, getReviewsByProductId } from "../controller/reveow.controller.js";

const router = express.Router();

router.post("/createreview", createReview);
router.get("/product/:productId", getReviewsByProductId);

export default router;