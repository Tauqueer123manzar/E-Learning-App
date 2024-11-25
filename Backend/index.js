import express from "express";
import mongoose from "mongoose";

const app=express();
const PORT=process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})