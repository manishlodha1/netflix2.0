import mongoose from "mongoose";
import dotenv from "dotenv";

// dotenv.config({
//     path: "../.env"
// })

dotenv.config();
// console.log("Loaded environment variables:", process.env);


const databaseConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
}; 

export default databaseConnection; 