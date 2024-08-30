const todoModal = require('../models/todoModal');

let todoStorage = [];

const defaultController = (req, res) => {
    res.render('index.ejs', { todos: todoStorage });
}

const todoApp = async (req, res) => {
    // let todoObj = {
    //     id: todoStorage.length + 1,
    //     task: req.body.task
    // }
    // todoStorage = [...todoStorage, todoObj];

    const todoObj = new todoModal({
        task: req.body.task,
        completed: false
    })
    console.log(todoObj);

    await todoObj.save();

    // console.log(todoObj);
    res.redirect('/')
}

const editTodo = (req, res) => {

    let { id } = req.params;

    let singleRec = todoStorage.find((rec) => {
        return rec.id == id;
    })

    // console.log("Single Record", singleRec);

    // res.send("Hello");
    res.render('editTodo.ejs', { todos: singleRec });
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