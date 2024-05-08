import express from "express";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js";
import messageroutes from "./routes/message.routes.js";
import connectDB from "./db/dbConnect.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import path from "path";
import { app, server } from "./socket/socket.js";

dotenv.config();

const Port = process.env.Port || 5000;

const ___dirname = path.resolve();

app.use(cookieParser());
app.use(express.json());

connectDB();

app.use("/api/auth", authroutes);
app.use("/api/messages", messageroutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(___dirname, "/front/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(___dirname, "front", "dist", "index.html"));
});

server.listen(Port, () =>
  console.log("server is runnin at http://localhost:5000")
);
