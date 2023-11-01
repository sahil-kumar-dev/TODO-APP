import { app } from "./app.js";
import { connectToDB } from "./config/dbconfig.js";

const PORT = 8080

connectToDB()

app.listen(PORT,()=>{
	console.log("Server is running on PORT: " , PORT);
})



