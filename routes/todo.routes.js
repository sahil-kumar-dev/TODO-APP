import express, { Router } from "express"
import { CreateTodo, getTodo, getTodoById } from "../controllers/CreateTodo.controller.js"

const router = Router()


router.post('/createtodo', CreateTodo)
router.get('/gettodo', getTodo)
router.get('/gettodo/:id',getTodoById)




export default router