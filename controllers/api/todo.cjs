const Todo = require('../../models/todo.cjs');

module.exports = {
    index,
    show,
    create,
};

async function index(req, res) {
    try {
        const tasks = await Todo.find({})
        res.status(200).json(tasks);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const task = await Todo.findById(req.params.id);
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function create(req, res) {
    try {
        if (req.body.completed === "on") {
            req.body.completed = true
        } else {
            req.body.completed = false
        }
        const createdTask = await Todo.create(req.body)
        res.status(200).json(createdTask)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}