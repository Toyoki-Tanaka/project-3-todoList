const { Schema, model } = require('mongoose')

const todoSchema = new Schema(
    {
        task: { type: String, required: true },
        dueDate: { type: Date, required: true },
        completed: { type: Boolean, default: false, required: true }

    }
)

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo