//POST is an HTTP method used to send data to a server, commonly to create a new resource.

// const express = require("express");

// const app = express();

// const port = 3000;

// app.post("/todos", function(req, res) {

//     res.send("POST request received by Sohan");

// });

// app.listen(port, function() {

//     console.log(`Server running at http://localhost:${port}`);

// });







// const express = require("express");

// const app = express();

// const port = 3000;

// // Allows Express to read JSON request bodies
// app.use(express.json());

// app.post("/todos", function(req, res) {

//     console.log(req.body);

//     res.json({
//         message: "Todo received",
//         todo: req.body
//     });

// });

// app.listen(port, function() {

//     console.log(`Server running at http://localhost:${port}`);

// });






const express = require("express");

const app = express();

const port = 3000;

// Allows Express to read JSON request bodies
app.use(express.json());

app.post("/todos", function(req, res) {

    const todo = {
        id: 1,
        title: req.body.title,
        completed: req.body.completed
    };

    res.status(201).json(todo);

});


app.listen(port, function() {

    console.log(`Server running at http://localhost:${port}`);

});