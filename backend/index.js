import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./db/connectdb.js";
import authRoutes from "./routes/auth.route.js";
//CwfajWTkMwOTffKG

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World 1223@");
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectdb();
  console.log("Server is running at 3000 port");
});
