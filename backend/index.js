import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectdb } from "./db/connectdb.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
//CwfajWTkMwOTffKG

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectdb();
  console.log("Server is running at port:", PORT);
});
