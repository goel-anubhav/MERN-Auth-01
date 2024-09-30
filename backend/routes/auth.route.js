import express from "express";
import { login, signup, logout, verifyEmail } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup", signup);

router.get("/login", login);

router.get("/logout", logout);

router.post("/verify-email", verifyEmail);

export default router;
