import express,{Router} from "express"
import { CreateTodo } from "../controllers/CreateTodo.controller.js"

const router = Router()


router.post('/createtodo',CreateTodo)




export default router