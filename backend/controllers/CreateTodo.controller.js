import Todo from "../models/Todo.models.js";

export const CreateTodo = async (req, res) => {
	const { title, description } = req.body


	try {
		if (!title || !description) {
			return res.status(500).json({
				success: false,
				message: "All fields are required."
			})
		}

		const todo = await Todo.create({
			title,
			description
		})

		await todo.save()

		res.status(200).json({
			success: true,
			message: "Todo saved successfully.",
			todo
		})
	}
	catch (err) {
		res.status(400).json({
			success: false,
			message: err.message
		})
	}
}

export const getTodo = async (req, res) => {

	try {
		const todos = await Todo.find({})

		if (!todos) {
			return res.status(402).json({
				success: false,
				message: "Unable to get todos."
			})
		}

		res.status(200).json({
			success: true,
			message: "Todos fetched successfully.",
			data: todos
		})
	}
	catch (err) {
		return res.status(400).json({
			success: false,
			message: err.message
		})
	}
}

export const getTodoById = async (req, res) => {

	const { id } = req.params

	try {
		const todo = await Todo.findById(id)

		if (!todo) {
			return res.status(402).json({
				success: false,
				message: "Unable to get todo by the given id."
			})
		}

		res.status(200).json({
			success: true,
			message: "Todos fetched successfully.",
			data: todo
		})
	}
	catch (err) {
		return res.status(400).json({
			success: false,
			message: err.message
		})
	}
}

export const updataTodo = async (req, res) => {

	const { id } = req.params

	const {title,description} = req.body

	try {
		const todo = await Todo.findByIdAndUpdate(
			{ _id: id },
			{ title, description, updatedAt: Date.now() },
			{new:true}
		)

		if (!todo) {
			return res.status(502).json({
				success: false,
				message: "Something went wrong."
			})
		}

		return res.status(200).json({
			success:true,
			message:"Todo updated successfully.",
			data:todo
		})
	} catch (error) {
		return res.status(400).json({
			success: false,
			message: error.message
		})
	}

}

export const deleteTodo = async (req, res) => {

	const { id } = req.params

	try {
		const todo = await Todo.findByIdAndDelete(id)

		return res.status(200).json({
			success: false,
			message: "Todo deleted successfully."
		})
	}
	catch (error) {
		return res.status(400).json({
			success:false,
			message:error.message
		})
	}
}