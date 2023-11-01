import express, { Router } from "express"
import { CreateTodo, deleteTodo, getTodo, getTodoById, updataTodo } from "../controllers/CreateTodo.controller.js"

const router = Router()


router.post('/createtodo', CreateTodo)
router.get('/gettodo', getTodo)
router.get('/gettodo/:id',getTodoById)
router.put('/update/:id',updataTodo)
router.delete('/delete/:id',deleteTodo)




export default router