//Middleware is a function that executes during the request-response cycle and has access to the request (req) object, response (res) object, and the next() function.



// 🟠 1. app.use()
// Definition

// app.use() is an Express method used to register middleware functions that execute during the request-response cycle.




// const express = require("express");

// const app = express();

// const port = 3000;

// // Middleware registered using app.use()
// app.use(function(req, res, next) {

//     console.log("Middleware executed");

//     next();

// });

// // Route
// app.get("/", function(req, res) {

//     res.send("Hello from server");

// });

// app.listen(port, function() {

//     console.log(`Server running at http://localhost:${port}`);

// });






// 🟠 2. next()
// Formal definition

// next() is a function provided by Express middleware that passes control to the next middleware function or route handler in the request-response cycle.





// const express = require("express");

// const app = express();

// const port = 3000;

// app.use(function(req, res, next) {

//     console.log("Middleware 1");

//     next();

// });

// app.use(function(req, res, next) {

//     console.log("Middleware 2");

//     next();

// });

// app.get("/", function(req, res) {

//     console.log("Route handler");

//     res.send("Hello");

// });

// app.listen(port, function() {

//     console.log(`Server running at http://localhost:${port}`);

// });







// 🟠 3. express.json()

// You have already used this:

// app.use(express.json());

// Now let's understand exactly what it does.

// Definition

// express.json() is built-in Express middleware that parses incoming requests containing JSON data and makes the parsed data available through req.body.






// const express = require("express");

// const app = express();

// const port = 3000;

// // Built-in middleware to parse JSON request bodies
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






// 🟠 4. Custom Middleware

// So far you've used built-in middleware:

// app.use(express.json());

// Now you'll create your own middleware.

// What is Custom Middleware?
// Formal definition

// Custom middleware is a user-defined function that executes during the Express request-response cycle and can inspect or modify the request, perform operations, and either pass control using next() or send a response.






const express = require("express");

const app = express();

const port = 3000;


// Custom middleware
function logger(req, res, next) {

    console.log("Method:", req.method);
    console.log("URL:", req.url);

    next();

}


// Register middleware
app.use(logger);


// Route
app.get("/", function(req, res) {

    res.send("Hello from server");

});


app.listen(port, function() {

    console.log(`Server running at http://localhost:${port}`);

});