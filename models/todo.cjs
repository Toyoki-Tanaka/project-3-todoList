const { Schema, model } = require('mongoose')

const todoSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },

        task: { type: String, required: true },
        dueDate: { type: Date, required: true },
        completed: { type: Boolean, default: false, required: true },


    }
)

const Todo = model("Todo", todoSchema)

module.exports = Todo