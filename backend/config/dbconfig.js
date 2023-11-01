import mongoose from "mongoose";

export const connectToDB = () =>{
	mongoose.connect('mongodb://127.0.0.1:27017/todoapp',{
		useNewUrlParser:true,
		useUnifiedTopology:true
	})
	.then(() => console.log("Connected to database"))
	.catch((err)=>{
		console.log("Connect error: " , err.message)
		process.exit(1)
	})
}

