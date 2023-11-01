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
			success:true,
			message:"Todo saved successfully.",
			todo
		})
	}
	catch (err){
		res.status(400).json({
			success:false,
			message:err.message
		})
	}
}