//DELETE is an HTTP method used to remove an existing resource from the server.



// const express = require("express");

// const app = express();

// const port = 3000;

// app.delete("/todos/1", function(req, res) {

//     res.send("DELETE request received");

// });

// app.listen(port, function() {

//     console.log(`Server running at http://localhost:${port}`);

// });

//DELETE request received 




const express = require("express");

const app = express();

const port = 3000;


// Temporary Todo data
let todos = [
    { id: 1, title: "Learn Express", completed: false },
    { id: 2, title: "Build REST API", completed: false },
    { id: 3, title: "Learn Postman", completed: true }
];


// DELETE → Remove a Todo
app.delete("/todos/:id", function(req, res) {

    // Get Todo ID from URL
    const id = Number(req.params.id);

    // Find the position of the Todo
    const index = todos.findIndex(function(todo) {
        return todo.id === id;
    });

    // If Todo doesn't exist
    if (index === -1) {

        return res.status(404).json({
            message: "Todo not found"
        });

    }

    // Remove 1 Todo from the array
    const deletedTodo = todos.splice(index, 1);

    // Send deleted Todo as response
    res.status(200).json({
        message: "Todo deleted successfully",
        todo: deletedTodo[0]
    });

});


// Start server
app.listen(port, function() {

    console.log(`Server running at http://localhost:${port}`);

});