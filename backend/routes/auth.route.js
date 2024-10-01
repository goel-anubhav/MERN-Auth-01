import express from "express";
import { login, signup, logout, verifyEmail, forgotPassword, resetPassword, checkAuth } from "../controllers/auth.controllers.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth)
router.post("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
