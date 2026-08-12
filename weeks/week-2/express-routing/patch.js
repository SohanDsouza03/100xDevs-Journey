//PATCH is an HTTP method used to partially modify an existing resource.


const express = require("express");

const app = express();

const port = 3000;

// Allows Express to read JSON request bodies
app.use(express.json());

// Temporary Todo data
let todos = [
    { id: 1, title: "Learn Express", completed: false },
    { id: 2, title: "Build a REST API", completed: false }
];

// PATCH → Partially update an existing Todo
app.patch("/todos/:id", function(req, res) {

    const id = Number(req.params.id);

    // Find the Todo
    const todo = todos.find(function(todo) {
        return todo.id === id;
    });

    // If Todo doesn't exist
    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    // Update only the fields provided
    if (req.body.title !== undefined) {
        todo.title = req.body.title;
    }

    if (req.body.completed !== undefined) {
        todo.completed = req.body.completed;
    }

    // Send updated Todo
    res.status(200).json(todo);
});

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}`);
});