const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/', controller.defaultController);
router.post('/todoApp', controller.todoApp);
router.get('/editTodo/:id', controller.editTodo);
router.post('/updateTodo/:id', controller.updateTodo);
router.get('/deleteTodo/:id', controller.deleteTodo);

module.exports = router; 