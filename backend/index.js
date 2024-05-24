 // step-1  cretae server
//  const express = require("express");
 import express from "express";
 import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import cors from "cors";

 databaseConnection();

 dotenv.config({
    path: ".env"
 })
  
 
 const app = express(); 

 app.use(cors(
   {
       origin: ["https://deploy-mern-frontend.vercel.app"],
       methods: ["POST", "GET"],
       credentials:true
   }
));

 //middlewares
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());
 app.use(cookieParser()); 
 const corsOptions = {
   origin: 'http://localhost:3000',
   credentials:true,
 }
 app.use(cors(corsOptions));


app.use("/api/v1/user",userRoute);


 app.listen(process.env.PORT,()=>{
    console.log(`Server listen at port ${process.env.PORT} `)
 });