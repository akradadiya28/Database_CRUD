const todoModal = require('../models/todoModal');

let todoStorage = [];

const defaultController = async (req, res) => {

    const todos = await todoModal.find({});

    res.render('index.ejs', { todos: todos });
}

const todoApp = async (req, res) => {

    const todoObj = new todoModal({
        task: req.body.task,
        completed: false
    })
    console.log(todoObj);

    await todoObj.save();

    // console.log(todoObj);
    res.redirect('/')
}

const editTodo = async (req, res) => {

    let { id } = req.params;

    const editTodo = await todoModal.findOne({ _id: id });

    res.render('editTodo.ejs', { todos: editTodo });
}

const updateTodo = (req, res) => {

    let { id } = req.params;
    console.log(req.body);

    const updateData = todoStorage.find((todo) => {
        return todo.id = id;
    })

    updateData.task = req.body.task;

    console.log("Update Data", updateData);

    res.redirect('/');
}

const deleteTodo = (req, res) => {

    let { id } = req.params;

    let newTodo = todoStorage.filter((todo) => {
        return todo.id != id;
    })
    console.log("newTodo", newTodo);

    todoStorage = newTodo;

    res.redirect('/');
}

module.exports = { defaultController, todoApp, editTodo, updateTodo, deleteTodo };