"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodo = void 0;
const getTodo = (req, res) => {
    // Replace Redis functionality with dummy data for demonstration purposes
    const todos = [
        { id: 1, title: "Finish project", completed: false },
        { id: 2, title: "Buy groceries", completed: true },
        { id: 3, title: "Go for a run", completed: false },
    ];
    res.json(todos);
};
exports.getTodo = getTodo;
const createTodo = (req, res) => {
    // Replace Redis functionality with dummy data for demonstration purposes
    const newTodo = {
        id: Date.now(),
        title: req.body.title,
        completed: false,
    };
    res.json(newTodo);
};
exports.createTodo = createTodo;
const updateTodo = (req, res) => {
    // Replace Redis functionality with dummy data for demonstration purposes
    const id = parseInt(req.params.id);
    const todos = [
        { id: 1, title: "Finish project", completed: false },
        { id: 2, title: "Buy groceries", completed: true },
        { id: 3, title: "Go for a run", completed: false },
    ];
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
        const updatedTodo = {
            ...todos[todoIndex],
            title: req.body.title || todos[todoIndex].title,
            completed: req.body.completed !== undefined
                ? req.body.completed
                : todos[todoIndex].completed,
        };
        todos[todoIndex] = updatedTodo;
        res.json(updatedTodo);
    }
    else {
        res.status(404).json({ message: "Todo not found" });
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => {
    // Replace Redis functionality with dummy data for demonstration purposes
    const id = parseInt(req.params.id);
    const todos = [
        { id: 1, title: "Finish project", completed: false },
        { id: 2, title: "Buy groceries", completed: true },
        { id: 3, title: "Go for a run", completed: false },
    ];
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.json({ message: "Todo deleted successfully" });
    }
    else {
        res.status(404).json({ message: "Todo not found" });
    }
};
exports.deleteTodo = deleteTodo;
