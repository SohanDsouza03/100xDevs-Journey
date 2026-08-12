// PUT is an HTTP method used to update or completely replace an existing resource on the server.


// const express = require("express");

// const app = express();

// const port = 3000;

// app.put("/todos/1", function(req, res) {

//     res.send("PUT request received");

// });

// app.listen(port, function() {

//     console.log(`Server running at http://localhost:${port}`);

// });





// const express = require("express");

// const app = express();

// const port = 3000;

// app.use(express.json());

// app.put("/todos/1", function(req, res) {

//     console.log(req.body);

//     res.json({
//         message: "Todo updated",
//         todo: req.body
//     });

// });

// app.listen(port, function() {

//     console.log(`Server running at http://localhost:${port}`);

// });






///actually create the updated Todo
const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.put("/todos/1", function(req, res) {

    const todo = {
        id: 1,
        title: req.body.title,
        completed: req.body.completed
    };

    res.status(200).json(todo);

});

app.listen(port, function() {

    console.log(`Server running at http://localhost:${port}`);

});