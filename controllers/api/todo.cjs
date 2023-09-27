const Todo = require('../../models/todo.cjs');

module.exports = {
    index,
    show,
};

async function index(req, res) {
    try {
        const tasks = await Todo.find({})
        // re-sort based upon the sortOrder of the categories
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