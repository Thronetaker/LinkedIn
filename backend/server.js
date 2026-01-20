import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = 9090;

app.use(cors());   // take requests from Axios Frontend
app.use(express.json());

app.use(postRoutes);
app.use(userRoutes);

app.use(express.static("uploads"))

const start = async() => {
    
    const connectDB = await mongoose.connect("mongodb+srv://parmanand224radha_db_user:FkUNF8z0gbdN8gZD@linkcluster.xycdaje.mongodb.net/?retryWrites=true&w=majority&appName=LinkCluster");

    app.listen(9090 , () => {
        console.log(`server is running on port 9090`);
    })
}

start();