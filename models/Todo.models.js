import mongoose from "mongoose";
const {Schema, model} = mongoose

const todoSchema = new Schema({
	title:{
		type:String,
		required:true,
		maxLength:50
	},
	description:{
		type:String,
		required:true,
		maxLength:50
	},
	createdAt:{
		type:Date,
		required:true,
		default:Date.now()
	},
	updatedAt:{
		type:Date,
		required:true,
		default:Date.now()
	}
})

const Todo = model('Todo',todoSchema)

export default Todo