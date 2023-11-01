import express, { urlencoded } from "express"
import todoRoute from './routes/todo.routes.js'


export const app = express()


app.use(urlencoded({extended:true}))
app.use(express.json())

app.use('/api/v1',todoRoute)



app.get('/',(req,res)=>{
	res.send("<h1>hello everyone</h1>")
})

