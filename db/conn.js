import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.ATLAS_URI);


const db = mongoose.Connection


export default db;
