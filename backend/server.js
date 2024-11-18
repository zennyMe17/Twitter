import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import { connect } from "mongoose";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT||8000;
app.use("/api/auth",authRoutes)
dotenv.config();
// app.get("/",(req,res)=>{
//     res.send("server is good and ready");
// });
console.log(process.env.MONGO_URI)

app.listen(PORT, () => {
  console.log(`Server is running okay on port ${PORT}`);
  connectMongoDB();
});
