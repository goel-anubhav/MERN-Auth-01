import express from "express";
import { login, signup, logout, verifyEmail, forgotPassword } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
// router.post("/re-password", forgotPassword);

export default router;
