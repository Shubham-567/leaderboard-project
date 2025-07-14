import express from "express";
import {
  claimPoints,
  getClaimHistory,
} from "../controllers/claimController.js";

const router = express.Router();

router.post("/:id", claimPoints);
router.get("/history", getClaimHistory);

export default router;
