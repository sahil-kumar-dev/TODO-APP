import express from "express";
import { connectToDB } from "./config/dbconfig.js";

const app = express()
const PORT = 8080


connectToDB()

app.listen(PORT,()=>{
	console.log("Server is running on PORT: " , PORT);
})



